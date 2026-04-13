import { Language, FormData } from '../types';
import { translations } from '../i18n';

export const TEMPLATES_KEY = 'academicHelperTemplates';
export const LANG_KEY = 'academicHelperLang';
export const THEME_KEY = 'theme';

export const DEFAULT_LOGO = "https://upload.wikimedia.org/wikipedia/tr/e/e0/Bilecik_%C5%9Eeyh_Edebali_%C3%9Cniversitesi_logosu.jpg";

export const getInitialData = (lang: Language = 'en'): FormData => ({
    headerLine1: 'T.C.',
    headerLine2: translations[lang].default_university,
    headerLine3: translations[lang].default_institute,
    subject: translations[lang].default_subject,
    assignmentType: translations[lang].default_assignment_type,
    studentName: translations[lang].default_student_name, 
    studentNumber: translations[lang].default_student_number, 
    advisorLabel: translations[lang].default_advisor_label,
    advisorName: translations[lang].default_advisor_name,
    city: translations[lang].default_city,
    year: new Date().getFullYear().toString()
});

export const getPdfOptions = (fileName: string) => ({
    margin: 0, 
    filename: `${fileName}.pdf`,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: { 
        scale: 2, 
        useCORS: true, 
        allowTaint: true,
        logging: false,
        scrollX: 0,
        scrollY: 0
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
});
