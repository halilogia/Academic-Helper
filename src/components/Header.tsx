import React from 'react';
import { Icons } from './Icons';
import { Language } from '../types';
import { TranslationKeys } from '../i18n';

interface HeaderProps {
    lang: Language;
    theme: string;
    isDownloading: boolean;
    toggleLang: () => void;
    toggleTheme: () => void;
    handleResetClick: () => void;
    handleSaveTemplate: () => void;
    handleDownloadPdf: () => void;
    t: (key: keyof TranslationKeys) => string;
}

export const Header: React.FC<HeaderProps> = ({
    lang,
    theme,
    isDownloading,
    toggleLang,
    toggleTheme,
    handleResetClick,
    handleSaveTemplate,
    handleDownloadPdf,
    t
}) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b pb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                <Icons.BookOpen size={24} className="text-blue-900 dark:text-blue-400" />
                {t('app_title')}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-center">
                <button onClick={toggleLang} className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    {lang === 'tr' ? 'EN' : 'TR'}
                </button>
                <button onClick={toggleTheme} className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    {theme === 'light' ? <Icons.Moon size={20} /> : <Icons.Sun size={20} />}
                </button>
                <button
                    onClick={handleResetClick}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md active:scale-95 w-full sm:w-auto cursor-pointer"
                    title={t('reset')}
                >
                    <Icons.RotateCcw size={20} />
                    <span className="font-bold">{t('reset')}</span>
                </button>
                <button
                    onClick={handleSaveTemplate}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md active:scale-95 w-full sm:w-auto cursor-pointer"
                    title={t('save')}
                >
                    <Icons.Save size={20} />
                    <span className="font-bold">{t('save')}</span>
                </button>
                <button 
                    onClick={handleDownloadPdf}
                    disabled={isDownloading}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md active:scale-95 w-full sm:w-auto cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                    title={t('download_pdf')}
                >
                    <Icons.Download size={20} />
                    <span className="font-bold">{isDownloading ? t('generating') : t('download_pdf')}</span>
                </button>
            </div>
        </div>
    );
};