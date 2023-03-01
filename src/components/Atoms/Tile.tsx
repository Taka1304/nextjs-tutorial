import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
  colorFlag: "correct" | "wrong" | "none"
}

const StyledWrapper = styled.div<{colorFlag: "correct" | "wrong" | "none"}>`
  height: 70px;
  width: 70px;

  background-color: ${(props) => props.colorFlag === "correct" && "#11671a"};
  background-color: ${(props) => props.colorFlag === "wrong" && "#ABAB22"};
  background-color: ${(props) => props.colorFlag === "none" && "#48515A"};
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

const WordTile: FC<Props> = ({ children, colorFlag }) => {
  
  return (
    <StyledWrapper colorFlag={colorFlag}>
      {children}
    </StyledWrapper>
  )
}

export default WordTile