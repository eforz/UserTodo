import { ReactNode } from 'react';

export interface iInputProps {
    children?: ReactNode;
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}