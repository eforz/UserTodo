import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'
import { iFormProps } from './../../models/iFormProps';
import Flex from './Flex'

const StyledForm = styled.form`
    border: 2px solid #31313D;
    border-radius: 30px;
    width: 400px;
    height: 300px;
`

const Form: FC<iFormProps> = () => {
  return (
    <StyledForm>
      <Flex direction='column' justify='center' align='center' heightProps='100%'>
        <h2>Login please</h2>
        <h5>Admin:Admin</h5>
        <Input 
          type="text"
          placeholder="Username"
        />
        <Input 
          type="password"
          placeholder="Password"
        />
        <Flex>

          <Button>  
            <Link to='/todo'>Login</Link>
          </Button>

          <Button>  
            Register
          </Button>

        </Flex>
        
      </Flex>
    </StyledForm>
  )
}

export default Form