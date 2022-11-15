import { ReactChild, ReactNode } from "react";

export interface iButtonProps {
    children?: ReactNode | ReactChild;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}