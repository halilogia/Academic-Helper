import React, { useState, useRef, useEffect, useCallback } from 'react';

import html2pdf from 'html2pdf.js';
import { translations, TranslationKeys } from './i18n';
import './index.css';

// Types & Constants
import { Language, Template } from './types';
import { 
    TEMPLATES_KEY, 
    LANG_KEY, 
    THEME_KEY, 
    DEFAULT_LOGO, 
    getInitialData, 
    getPdfOptions 
} from './constants';

// Hooks & Services
import { useFormState } from './hooks/useFormState';
import { fetchFromCrossRef, fetchFromOpenLibrary } from './services/citationService';

// Components
import { Header } from './components/Header';
import { StatusMessage } from './components/StatusMessage';
import { TemplateManager } from './components/TemplateManager';
import { CitationHelper } from './components/CitationHelper';
import { DocumentEditor } from './components/DocumentEditor';
import { DocumentPreview } from './components/DocumentPreview';
import { ResetModal } from './components/ResetModal';

export default function App() {
    // --- State Management ---
    const [lang, setLang] = useState<Language>(() => (localStorage.getItem(LANG_KEY) as Language) || 'en');
    const [logoUrl, setLogoUrl] = useState(DEFAULT_LOGO);
    const [imgError, setImgError] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");
    const [isDownloading, setIsDownloading] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || 'light');
    const [templates, setTemplates] = useState<Template[]>(() => {
        const saved = localStorage.getItem(TEMPLATES_KEY);
        return saved ? JSON.parse(saved) : [];
    });
    
    const [citationInput, setCitationInput] = useState('');
    const [formattedCitation, setFormattedCitation] = useState('');
    const [isCitationLoading, setIsCitationLoading] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const printAreaRef = useRef<HTMLDivElement>(null);

    // Form State Hook
    const { formData, updateField, resetForm, loadFormState } = useFormState(getInitialData(lang));

    // --- Localization ---
    const t = useCallback((key: keyof TranslationKeys, params: Record<string, string> = {}) => {
        let text = translations[lang][key] || (key as string);
        Object.keys(params).forEach(param => {
            text = text.replace(`{${param}}`, params[param]);
        });
        return text;
    }, [lang]);

    useEffect(() => {
        document.title = t('title');
        document.documentElement.lang = lang;
    }, [t, lang]);

    // --- Theme & Persistence ---
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem(TEMPLATES_KEY, JSON.stringify(templates));
    }, [templates]);

    // --- Actions ---
    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    const toggleLang = () => {
        const newLang = lang === 'tr' ? 'en' : 'tr';
        setLang(newLang);
        localStorage.setItem(LANG_KEY, newLang);
    };

    const showStatus = (msg: string) => {
        setStatusMsg(msg);
        setTimeout(() => setStatusMsg(""), 4000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateField(e.target.name, e.target.value);
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            window.alert(t('invalid_image_error'));
            if (fileInputRef.current) fileInputRef.current.value = "";
            return;
        }

        const reader = new FileReader();
        reader.onloadstart = () => setImgError(false);
        reader.onloadend = () => {
            if (typeof reader.result === 'string') setLogoUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleResetLogo = () => {
        setLogoUrl(DEFAULT_LOGO);
        setImgError(false);
    };

    const triggerReset = () => {
        resetForm(getInitialData(lang));
        setLogoUrl(DEFAULT_LOGO);
        if (fileInputRef.current) fileInputRef.current.value = "";
        setImgError(false);
        setCitationInput('');
        setFormattedCitation('');
        setIsConfirmModalOpen(false);
    };

    const handleSaveTemplate = () => {
        const name = prompt(t('enter_template_name'));
        if (name && name.trim()) {
            const newTemplate = { id: Date.now(), name: name.trim(), data: formData, logo: logoUrl };
            setTemplates(prev => [...prev, newTemplate]);
            showStatus(t('template_saved', { name: name.trim() }));
        }
    };

    const handleLoadTemplate = (templateId: number) => {
        const template = templates.find(t => t.id === templateId);
        if (template) {
            loadFormState(template.data);
            setLogoUrl(template.logo);
            showStatus(t('template_loaded', { name: template.name }));
        }
    };

    const handleDeleteTemplate = (templateId: number) => {
        const template = templates.find(t => t.id === templateId);
        if (template && window.confirm(t('template_delete_confirm', { name: template.name }))) {
            setTemplates(prev => prev.filter(t => t.id !== templateId));
            showStatus(t('template_deleted', { name: template.name }));
        }
    };

    const handleFetchCitation = async () => {
        const input = citationInput.trim();
        if (!input) return;

        setIsCitationLoading(true);
        setFormattedCitation('');

        try {
            let citation = '';
            if (input.startsWith('10.')) {
                citation = await fetchFromCrossRef(input, lang, t);
            } else if (/^\d{10}(\d{3})?$/.test(input.replace(/-/g, ''))) {
                citation = await fetchFromOpenLibrary(input, lang, t);
            } else {
                throw new Error(t('invalid_format_error'));
            }
            setFormattedCitation(citation);
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            setFormattedCitation(`${lang === 'tr' ? 'Hata' : 'Error'}: ${errorMessage}`);
        } finally {
            setIsCitationLoading(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(formattedCitation).then(() => {
            showStatus(t('citation_copied'));
        }, () => {
            showStatus(t('copy_error'));
        });
    };

    const handleDownloadPdf = () => {
        if (!formData.subject || (!formData.studentName || formData.studentName === t('default_student_name')) || (!formData.studentNumber || formData.studentNumber === t('default_student_number'))) {
            window.alert(t('pdf_validation_error'));
            return;
        }

        const element = printAreaRef.current;
        if (!element) return;
        
        const fileName = formData.subject
            .replace(/[^a-z0-9_-\s]/gi, '')
            .replace(/\s+/g, ' ')
            .trim()
            .replace(/\s/g, '_') || (lang === 'tr' ? 'Odev_Kapagi' : 'Assignment_Cover');

        const opt = getPdfOptions(fileName);
        
        setIsDownloading(true);
        setStatusMsg(t('pdf_generating_wait'));
        
        html2pdf().set(opt).from(element).save()
            .then(() => {
                setStatusMsg(t('pdf_success'));
                setTimeout(() => setStatusMsg(""), 4000);
            })
            .catch((err: unknown) => { 
                console.error("PDF Indirme Hatasi:", err); 
                showStatus(t('general_error')); 
            })
            .finally(() => setIsDownloading(false));
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 font-sans print:bg-white print:p-0">
            <div className="max-w-6xl mx-auto mb-6 print-hidden">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
                    <Header 
                        lang={lang}
                        theme={theme}
                        isDownloading={isDownloading}
                        toggleLang={toggleLang}
                        toggleTheme={toggleTheme}
                        handleResetClick={() => setIsConfirmModalOpen(true)}
                        handleSaveTemplate={handleSaveTemplate}
                        handleDownloadPdf={handleDownloadPdf}
                        t={t}
                    />

                    <StatusMessage message={statusMsg} />

                    <TemplateManager 
                        templates={templates}
                        handleLoadTemplate={handleLoadTemplate}
                        handleDeleteTemplate={handleDeleteTemplate}
                        t={t}
                    />

                    <CitationHelper 
                        citationInput={citationInput}
                        setCitationInput={setCitationInput}
                        formattedCitation={formattedCitation}
                        isCitationLoading={isCitationLoading}
                        handleFetchCitation={handleFetchCitation}
                        copyToClipboard={copyToClipboard}
                        lang={lang}
                        t={t}
                    />

                    <DocumentEditor 
                        formData={formData}
                        handleChange={handleChange}
                        logoUrl={logoUrl}
                        handleLogoUpload={handleLogoUpload}
                        handleResetLogo={handleResetLogo}
                        fileInputRef={fileInputRef}
                        t={t}
                    />
                </div>
            </div>

            <DocumentPreview 
                formData={formData}
                logoUrl={logoUrl}
                imgError={imgError}
                setImgError={setImgError}
                printAreaRef={printAreaRef}
                t={t}
            />

            <ResetModal 
                isOpen={isConfirmModalOpen}
                onClose={() => setIsConfirmModalOpen(false)}
                onReset={triggerReset}
                t={t}
            />
        </div>
    );
}