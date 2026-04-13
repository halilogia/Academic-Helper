import React from 'react';

interface StatusMessageProps {
    message: string;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ message }) => {
    if (!message) return null;
    
    return (
        <div 
            className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-md border border-blue-200 dark:border-blue-500/30 text-center font-medium animate-pulse"
            role="status"
            aria-live="polite"
        >
            {message}
        </div>
    );
};