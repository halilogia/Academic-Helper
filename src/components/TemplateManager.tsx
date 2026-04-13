import React from 'react';
import { Icons } from './Icons';
import { Template } from '../types';
import { TranslationKeys } from '../i18n';

interface TemplateManagerProps {
    templates: Template[];
    handleLoadTemplate: (id: number) => void;
    handleDeleteTemplate: (id: number) => void;
    t: (key: keyof TranslationKeys, params?: Record<string, string>) => string;
}

export const TemplateManager: React.FC<TemplateManagerProps> = ({
    templates,
    handleLoadTemplate,
    handleDeleteTemplate,
    t
}) => {
    if (templates.length === 0) return null;

    return (
        <div className="mb-6 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-3">{t('saved_templates')}</h3>
            <div className="flex flex-wrap gap-2">
                {templates.map(template => (
                    <div key={template.id} className="flex items-center rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 shadow-sm">
                        <button 
                            onClick={() => handleLoadTemplate(template.id)} 
                            className="px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-l-md"
                        >
                            {template.name}
                        </button>
                        <button 
                            onClick={() => handleDeleteTemplate(template.id)} 
                            className="px-2 py-1.5 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50 border-l border-gray-300 dark:border-gray-600 rounded-r-md" 
                            title={t('reset')}
                        >
                            <Icons.Trash size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};