import React, { FC } from 'react'
import styled from 'styled-components'
import Tile from '../Atoms/Tile'

const StyledBoard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`


const Board: FC = () => {
  return (
    <StyledBoard>
      <Tile>T</Tile>
      <Tile>T</Tile>
      <Tile>T</Tile>
      <Tile>T</Tile>
      <Tile>T</Tile>
    </StyledBoard>
  )
}

export default Board
