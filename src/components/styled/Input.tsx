import React, { FC } from 'react'
import styled from 'styled-components'
import { iInputProps } from './../../models/iInputProps';

const StyledInput = styled.input`
    width: 300px;
    height: 30px;
    padding: 5px;
    border: 2px solid #FC76A1;
    margin:10px;
`

const Input: FC<iInputProps> = (props) => {
  return (
    <StyledInput {...props}></StyledInput>
  )
}

export default Input