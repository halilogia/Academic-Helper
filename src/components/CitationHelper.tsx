import React from 'react';
import { Icons } from './Icons';
import { TranslationKeys } from '../i18n';

interface CitationHelperProps {
    citationInput: string;
    setCitationInput: (value: string) => void;
    formattedCitation: string;
    isCitationLoading: boolean;
    handleFetchCitation: () => void;
    copyToClipboard: () => void;
    lang: string;
    t: (key: keyof TranslationKeys) => string;
}

export const CitationHelper: React.FC<CitationHelperProps> = ({
    citationInput,
    setCitationInput,
    formattedCitation,
    isCitationLoading,
    handleFetchCitation,
    copyToClipboard,
    lang,
    t
}) => {
    return (
        <div className="mb-6 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-3">{t('citation_helper_title')}</h3>
            <div className="flex flex-col sm:flex-row gap-2">
                <input 
                    type="text"
                    value={citationInput}
                    onChange={(e) => setCitationInput(e.target.value)}
                    placeholder={t('citation_placeholder')}
                    className="flex-grow px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    onClick={handleFetchCitation} 
                    disabled={isCitationLoading} 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md active:scale-95 disabled:bg-gray-400"
                >
                    <Icons.Search size={18} />
                    <span className="font-medium">{isCitationLoading ? t('searching') : t('create')}</span>
                </button>
            </div>
            {formattedCitation && (
                <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-600 relative group">
                    <p 
                        className="text-sm text-gray-800 dark:text-gray-200" 
                        dangerouslySetInnerHTML={{ __html: formattedCitation.replace(/\*(.*?)\*/g, '<i>$1</i>') }}
                    ></p>
                    <button 
                        onClick={copyToClipboard} 
                        className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" 
                        title={lang === 'tr' ? 'Panoya Kopyala' : 'Copy to Clipboard'}
                    >
                        <Icons.Clipboard size={16} />
                    </button>
                </div>
            )}
        </div>
    );
};