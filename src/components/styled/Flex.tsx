import React, { FC } from 'react'
import styled from 'styled-components';

interface StyledFlexProps {
    direction?: string;
    align?: string;
    justify?: string;
    margin?: string;
    children?:  React.ReactChild | React.ReactNode;
    widthProps?: string;
    heightProps?: string;
}

const StyledFlex = styled.div<StyledFlexProps>`
    display: flex;
    height: ${props => props.heightProps || 'auto'} ;
    width: ${props => props.widthProps || 'auto'} ;
    flex-direction: ${props => props.direction || 'row'} ;
    align-items: ${props => props.align || 'stretch'} ;
    justify-content: ${props => props.justify || 'stretch'} ;
    /* margin деструктуризация и из пропса получить только это свойство */
    margin: ${({margin}) => margin || '0'} ;
`

const Flex: FC<StyledFlexProps> = (props) => {
  return <StyledFlex {...props}/>
}

export default Flex