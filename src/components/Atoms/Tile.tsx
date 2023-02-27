import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const StyledWrapper = styled.div`
  height: 70px;
  width: 70px;

  background-color: #11671a;
  background-color: #ABAB22;
  background-color: #48515A;
  border: 1px solid #30363D;
  border-radius: 10%;
  color: #FFF;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 36px;
  font-weight: bold;
`

const WordTile: FC<Props> = ({ children }) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}

export default WordTile