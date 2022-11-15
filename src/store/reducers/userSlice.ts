import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iUser } from '../../models/iUser';

interface iUserState {
    users: iUser[],
    isLoading: boolean;
    error:  string | null;
}

const initialState: iUserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice(
    {
        name: 'todo',
        initialState,
    
        reducers: {
            usersFetching(state)  {
                state.isLoading = true;
            },
            usersFetchingSuccess(state, action: PayloadAction<iUser[]>)  {
                state.isLoading = false;
                state.error = '';
                state.users =  action.payload;
            },
            usersFetchingError(state, action: PayloadAction<string>)  {
                state.isLoading = false;
                state.error = action.payload;
            },
        }
    
    },)
    
    export default userSlice.reducer;