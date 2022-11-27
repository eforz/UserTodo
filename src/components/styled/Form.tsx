import React, { FC, useEffect, useState, useMemo} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'
import { iFormProps } from './../../models/iFormProps';
import Flex from './Flex'
import { fetchUsers } from './../../store/AsyncActions/fetchUsers';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { iUser } from './../../models/iUser';
import axios from 'axios'

const StyledForm = styled.form`
    border: 2px solid #31313D;
    border-radius: 30px;
    width: 400px;
    height: 300px;
`

const Form: FC<iFormProps> = (props) => {

  const dispatch = useAppDispatch()
  const {users} = useAppSelector(state => state.userReducer)
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')

  useEffect( () => {
    dispatch(fetchUsers())
  }, [])

  const loginChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }
  const passChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value)
  }

  const findUser = () => {
    console.log(users)
    const findUser = users.filter( function(user) {
      return user.name === login && user.password === pass 
    })
    console.log(findUser)
    const isFind = () => {
      if (findUser.length > 0) {
        return true
      }
      return false;
    }
    return isFind()
  }

  const newUser:iUser = {
    id: performance.now(),
    name: login,
    password: pass,
  }

  const postUser = async () => {
    await axios.post('http://localhost:5000/users', newUser)
    dispatch(fetchUsers())
    findUser()
  }

  return (
    <Flex widthProps='100%' heightProps='100vh' justify='center' align='center'>
      <StyledForm>
        <Flex direction='column' justify='center' align='center' heightProps='100%'>
          <h2>Login please</h2>
          <h5>Admin : Admin</h5>
          <Input type="text" placeholder="Username" onChange={loginChangeHandler}/>
          <Input type="password" placeholder="Password" onChange={passChangeHandler}/>
          <Flex>
            <Button onClick={findUser}>
                  {findUser() === true? <Link to='/todo'>Login</Link> : <Link to='/'>Login</Link>}
            </Button>
            <Button onClick={postUser}>register</Button>
          </Flex>
        </Flex>
      </StyledForm>
    </Flex>
  )
}

export default Form

