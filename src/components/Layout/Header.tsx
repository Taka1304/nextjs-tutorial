import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #161B22;
  color: #FFF;
  font-weight: 700;
  font-size: 28px;
  
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    padding: 0 30px;
  }
`
type Props = {
  children: ReactNode
}

const Header: FC<Props> = ({ children }) => {
  return (
    <StyledHeader>
      <span>{children}</span>
    </StyledHeader>
  )
}

export default Header