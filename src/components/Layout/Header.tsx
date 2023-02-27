import React, { FC } from 'react'
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

const Header: FC = () => {
  return (
    <StyledHeader>
      <span>WORDLE</span>
    </StyledHeader>
  )
}

export default Header