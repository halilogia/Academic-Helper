import React from 'react';
import { TranslationKeys } from '../i18n';

interface ResetModalProps {
    isOpen: boolean;
    onClose: () => void;
    onReset: () => void;
    t: (key: keyof TranslationKeys) => string;
}

export const ResetModal: React.FC<ResetModalProps> = ({
    isOpen,
    onClose,
    onReset,
    t
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 print-hidden">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-sm">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{t('confirmation')}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {t('reset_confirmation_text')}
                </p>
                <div className="mt-6 flex justify-end gap-3">
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                    >
                        {t('cancel')}
                    </button>
                    <button 
                        onClick={onReset} 
                        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
                    >
                        {t('yes_reset')}
                    </button>
                </div>
            </div>
        </div>
    );
};