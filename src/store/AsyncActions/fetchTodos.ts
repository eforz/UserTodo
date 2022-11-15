import axios from "axios"
import { AppDispatch } from "../store"
import { iTodo } from './../../models/iTodo';
import { todoSlice } from './../reducers/todoSlice';

export const fetchTodos = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoSlice.actions.todosFetching())
        const responce = await axios.get<iTodo[]>('http://localhost:5000/todos')
        setTimeout(() => {
            dispatch(todoSlice.actions.todosFetchingSuccess(responce.data))
        }, 1000)
    } catch (error) {
        dispatch(todoSlice.actions.todosFetchingError('Error on todos loading'))
    }
}