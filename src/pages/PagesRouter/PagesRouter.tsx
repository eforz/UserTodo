import React from 'react'
import {Route, Routes} from "react-router-dom";
import LoginPage from '../LoginPage';
import UserTodo from '../UserTodoPage';
import UserCabinet from '../UserCabinetPage';


const PagesRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<LoginPage/>}> </Route>
        <Route path='/user/todo' element={<UserTodo/>}> </Route>
        <Route path='/user/cabinet' element={<UserCabinet/>}> </Route>
    </Routes>
  )
}

export default PagesRouter