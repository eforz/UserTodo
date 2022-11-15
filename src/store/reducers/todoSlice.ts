import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iTodo } from './../../models/iTodo';

interface iTodoState {
    todos: iTodo[],
    isLoading: boolean;
    error:  string | null;
}

const initialState: iTodoState = {
    todos: [],
    isLoading: false,
    error: '',
}

export const todoSlice = createSlice(
{
    name: 'todo',
    initialState,

    reducers: {
        todosFetching(state)  {
            state.isLoading = true;
        },
        todosFetchingSuccess(state, action: PayloadAction<iTodo[]>)  {
            state.isLoading = false;
            state.error = '';
            state.todos =  action.payload;
        },
        todosFetchingError(state, action: PayloadAction<string>)  {
            state.isLoading = false;
            state.error = action.payload;
        },
    }

},)

export default todoSlice.reducer;