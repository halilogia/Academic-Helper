export type Language = 'en' | 'tr';

export interface FormData {
    headerLine1: string;
    headerLine2: string;
    headerLine3: string;
    subject: string;
    assignmentType: string;
    studentName: string;
    studentNumber: string;
    advisorLabel: string;
    advisorName: string;
    city: string;
    year: string;
}

export interface Template {
    id: number;
    name: string;
    data: FormData;
    logo: string;
}

export type FormAction =
    | { type: 'UPDATE_FIELD'; field: string; value: string }
    | { type: 'RESET_FORM'; initialState: FormData }
    | { type: 'LOAD_STATE'; state: FormData };