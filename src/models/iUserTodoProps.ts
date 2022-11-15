import { ReactNode } from "react";
import { iTodo } from './iTodo';

export interface iUserTodoProps {
    children?: ReactNode;
    todo: iTodo[],
}