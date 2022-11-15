import React, { FC } from 'react'
import styled from 'styled-components'
import { iButtonProps } from '../../models/iButtonProps'

const StyledButton = styled.button`
    padding: 8px;
    border: 2px solid #fff;
    border-radius: 30px;
    cursor: pointer;
    margin: 10px;
    &:hover {
        border-color: #FC76A1;
    }
    a:visited {
        color: black;
    }
    a{
      text-decoration: none;
      color: black;
    }
`

const Button: FC<iButtonProps> = (props) => {
  return (
    <StyledButton type="button" {...props}>{props.children}</StyledButton>
  )
}

export default Button