import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchTodos } from '../store/AsyncActions/fetchTodos'

const UserTodo = () => {
  const dispatch = useAppDispatch()
  const {todos, isLoading, error} = useAppSelector(state => state.todoReducer)  

  useEffect(() => {
    dispatch(fetchTodos())
    console.log(todos)
  }, [])

  console.log(todos)
  return (

    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(todos)}
    </div>

  )
}

export default UserTodo