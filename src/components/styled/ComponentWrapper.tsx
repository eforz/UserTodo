import React, { FC } from 'react'
import styled from 'styled-components'
import { IComponentWrapperProps } from '../../models/IComponentWrapperProps';
import Flex from './Flex';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const ComponentWrapper: FC<IComponentWrapperProps> = ({children}) => {
  return (
    <StyledWrapper>
        {children}
    </StyledWrapper>
  )
};

export default ComponentWrapper