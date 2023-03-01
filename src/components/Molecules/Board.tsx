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
  guessHistory: string[]
  answer: string
}

const checkGuess = ( char: string, index: number, answer: string ) => {
  // [課題]答えを判定する条件式を書く
	if (0) {
		// 答え(answer)のindex番目の文字がcharと一致するとき
		return "correct"
	} else if (0) {
		// 答え(answer)の中のどこかに、charが存在するとき
		return "wrong"
	}
	// それ以外
  return "none"
}

const Board: FC<Props> = ({ guessHistory, answer }) => {
  return (
    <StyledBoard>
      {guessHistory.map( word => (
        <Row key={word}>
        {word.split("").map(( char, index ) => (
          <Tile key={index} colorFlag={checkGuess(char, index, answer)}>
            {char}
          </Tile>
        ))}
        </Row>
      ))}
    </StyledBoard>
  )
}

export default Board