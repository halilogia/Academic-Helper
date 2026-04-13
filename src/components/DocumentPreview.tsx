import React from 'react';
import { FormData } from '../types';
import { TranslationKeys } from '../i18n';

interface DocumentPreviewProps {
    formData: FormData;
    logoUrl: string;
    imgError: boolean;
    setImgError: (value: boolean) => void;
    printAreaRef: React.RefObject<HTMLDivElement | null>;
    t: (key: keyof TranslationKeys) => string;
}

export const DocumentPreview: React.FC<DocumentPreviewProps> = ({
    formData,
    logoUrl,
    imgError,
    setImgError,
    printAreaRef,
    t
}) => {
    return (
        <div className="flex justify-center print:block print:w-full">
            <div className="shadow-2xl print:shadow-none">
                <div 
                    id="print-area"
                    ref={printAreaRef}
                    className="bg-white w-[210mm] h-[296mm] overflow-hidden relative flex flex-col items-center py-[3cm] px-[2.5cm] text-black print:w-full"
                >
                    <div className="mb-6 flex justify-center items-center h-32 w-full overflow-hidden shrink-0">
                        {!logoUrl ? (
                            <div className="h-24 w-24 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs text-center p-2 select-none print-hidden" data-html2canvas-ignore="true">
                                {t('no_logo')}
                            </div>
                        ) : imgError ? (
                            <div className="h-24 w-auto flex flex-col items-center justify-center text-red-500 text-xs p-2 border border-red-200 bg-red-50 print-hidden" data-html2canvas-ignore="true">
                                <span>{t('image_load_error')}</span>
                                <span className="text-[10px] text-gray-500 mt-1">{t('please_reupload')}</span>
                            </div>
                        ) : (
                            <img 
                                src={logoUrl} 
                                alt={t('university_logo')}
                                className="h-28 w-auto object-contain"
                                crossOrigin="anonymous"
                                onError={() => setImgError(true)}
                            />
                        )}
                    </div>
            
                    <div className="text-center mb-[4cm] w-full shrink-0">
                        <div className="text-[16pt] font-bold leading-tight">
                            {formData.headerLine1}
                        </div>
                        <div className="text-[16pt] font-bold leading-tight mt-1">
                            {formData.headerLine2}
                        </div>
                        <div className="text-[16pt] font-bold leading-tight mt-1 uppercase">
                            {formData.headerLine3}
                        </div>
                    </div>
            
                    <div className="text-center mb-[2cm] w-full shrink-0">
                        <div className="text-[14pt] font-bold">
                            {formData.subject}
                        </div>
                    </div>
            
                    <div className="text-center mb-[3cm] w-full shrink-0">
                        <div className="text-[12pt]">
                            {formData.assignmentType}
                        </div>
                    </div>
            
                    <div className="text-center mb-[2cm] w-full space-y-[1cm] shrink-0">
                        <div className="text-[12pt] flex flex-col gap-1">
                            <div>{formData.studentName}</div>
                            <div>{formData.studentNumber}</div>
                        </div>
                        <div className="text-[12pt] flex flex-col gap-1">
                            <div>{formData.advisorLabel}</div>
                            <div>{formData.advisorName}</div>
                        </div>
                    </div>
            
                    <div className="text-center mt-auto w-full shrink-0 pb-4">
                        <div className="text-[12pt]">
                            {formData.city}
                        </div>
                        <div className="text-[12pt] mt-1">
                            {formData.year}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};