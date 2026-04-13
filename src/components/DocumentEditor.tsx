import React from 'react';
import { Icons } from './Icons';
import { InputField } from './InputField';
import { FormData } from '../types';
import { TranslationKeys } from '../i18n';

interface DocumentEditorProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    logoUrl: string;
    handleLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleResetLogo: () => void;
    fileInputRef: React.RefObject<HTMLInputElement | null>;
    t: (key: keyof TranslationKeys) => string;
}

export const DocumentEditor: React.FC<DocumentEditorProps> = ({
    formData,
    handleChange,
    logoUrl,
    handleLogoUpload,
    handleResetLogo,
    fileInputRef,
    t
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-gray-700/50 p-4 rounded-lg border border-blue-100 dark:border-gray-700 relative">
                    <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
                        <Icons.ImageIcon size={18} />
                        {t('logo_settings')}
                    </h3>
                    
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-blue-700 dark:text-blue-400">{t('logo_help')}</p>
                        <div className="flex gap-2">
                            <label className="flex-1 flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-600 border border-blue-300 dark:border-gray-500 rounded-md cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors shadow-sm">
                                <Icons.Upload size={16} className="text-blue-600 dark:text-blue-300 mr-2" />
                                <span className="text-sm text-blue-600 dark:text-blue-200 font-medium">{logoUrl ? t('change_logo') : t('upload_logo')}</span>
                                <input 
                                    ref={fileInputRef}
                                    type="file" 
                                    className="hidden" 
                                    accept="image/*" 
                                    onChange={handleLogoUpload} 
                                />
                            </label>
                            {logoUrl && (
                                <button 
                                    onClick={handleResetLogo}
                                    className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-md border border-red-200 transition-colors cursor-pointer"
                                    aria-label={t('reset_logo')}
                                    title={t('reset_logo')}
                                >
                                    <Icons.RotateCcw size={16} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <h3 className="font-bold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">{t('top_section')}</h3>
                <InputField label={t('university_name')} name="headerLine2" value={formData.headerLine2} onChange={handleChange} />
                <InputField label={t('faculty_institute')} name="headerLine3" value={formData.headerLine3} onChange={handleChange} />
            </div>
            
            <div className="space-y-4">
                <h3 className="font-bold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">{t('middle_section')}</h3>
                <InputField label={t('subject_title')} name="subject" value={formData.subject} onChange={handleChange} />
                
                <h3 className="font-bold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2 pt-2">{t('details_section')}</h3>
                <InputField label={t('assignment_type')} name="assignmentType" value={formData.assignmentType} onChange={handleChange} />
                
                <div className="grid grid-cols-2 gap-2">
                    <InputField label={t('student_name_surname')} name="studentName" value={formData.studentName} onChange={handleChange} />
                    <InputField label={t('student_number')} name="studentNumber" value={formData.studentNumber} onChange={handleChange} />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                    <InputField label={t('advisor_title')} name="advisorLabel" value={formData.advisorLabel} onChange={handleChange} />
                    <InputField label={t('advisor_name_surname')} name="advisorName" value={formData.advisorName} onChange={handleChange} />
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <InputField label={t('city')} name="city" value={formData.city} onChange={handleChange} />
                    <InputField label={t('year')} name="year" value={formData.year} onChange={handleChange} />
                </div>
            </div>
        </div>
    );
};