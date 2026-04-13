import { useReducer } from 'react';
import { FormData, FormAction } from '../types';

function formReducer(state: FormData, action: FormAction): FormData {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: action.value,
            };
        case 'RESET_FORM':
            return action.initialState;
        case 'LOAD_STATE':
            return action.state;
        default:
            return state;
    }
}

export function useFormState(initialData: FormData) {
    const [formData, dispatch] = useReducer(formReducer, initialData);

    const updateField = (name: string, value: string) => {
        dispatch({ type: 'UPDATE_FIELD', field: name, value: value });
    };

    const resetForm = (initialState: FormData) => {
        dispatch({ type: 'RESET_FORM', initialState });
    };

    const loadFormState = (state: FormData) => {
        dispatch({ type: 'LOAD_STATE', state });
    };

    return {
        formData,
        updateField,
        resetForm,
        loadFormState
    };
}