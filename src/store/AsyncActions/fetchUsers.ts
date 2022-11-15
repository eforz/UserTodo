import axios from "axios"
import { AppDispatch } from "../store"
import { userSlice } from '../reducers/userSlice';
import { iUser } from '../../models/iUser';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const responce = await axios.get<iUser[]>('http://localhost:5000/users')
        dispatch(userSlice.actions.usersFetchingSuccess(responce.data))
    } catch (error) {
        dispatch(userSlice.actions.usersFetchingError('Error on users loading'))
    }
}