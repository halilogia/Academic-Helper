import React from 'react';

interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = React.memo(function InputField({ label, name, value, onChange }: InputFieldProps) {
    return (
        <div className="flex flex-col"> 
        <label htmlFor={name} className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">{label}</label>
        <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        </div>
    );
});