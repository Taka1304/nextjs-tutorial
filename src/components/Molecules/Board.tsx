import React, { FC } from 'react'
import styled from 'styled-components'
import Tile from '../Atoms/Tile'

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
type Props = {
  answerHistory: string[]
  correctAnswer: string
}

const Board: FC<Props> = ({ answerHistory, correctAnswer }) => {
  const flag: string = ""
  return (
    <StyledBoard>

    </StyledBoard>
  )
}

export default Board
