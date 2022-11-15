import React from 'react'
import {Route, Routes} from "react-router-dom";
import UserTodoPage from '../UserTodoPage';
import Form from './../../components/styled/Form';
import newUser from '../../components/styled/Form'

const PagesRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Form/>}> </Route>
        <Route path='/todo' element={<UserTodoPage/>}> </Route>
    </Routes>
  )
}

export default PagesRouter