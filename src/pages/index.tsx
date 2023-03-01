import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import Header from "@/components/Layout/Header";
import Board from "@/components/Molecules/Board";
import WORDS from "@/utils/fiveWords.json";
import styled from "styled-components";

const AllWrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #0D1117;
`

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 2;
  .inputWrapper {
    height: 50px;
    width: 70%;
    margin-bottom: 50px;
    > input {
      height: 100%;
      width: 100%;
      font-size: 32px;
      font-weight: bold;
    }
  }
`

const REGEXP = /[^A-Z]/g;

const MyApp: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [guessHistory, setGuessHistory] = useState<string[]>([])
  const [answer, setAnswer] = useState<string>('')

  const handleInputChange = ((e: ChangeEvent<HTMLInputElement>) => {
    // 大文字にして、半角英字以外消去
    const value = e.target.value.toUpperCase().replace(REGEXP, "")
    // 正規表現に乗っ取っている かつ 入力を5文字までにする 消した時はOK
    if (REGEXP.test(e.target.value) && inputValue.length < 5 || value.length < 5) {
      setInputValue(value)
    }
  })

  const handleSubmit = ((e: FormEvent) => {
    e.preventDefault()
    // 入力が5文字かつ, まだ5回答えていない場合
    if (inputValue.length === 5 && guessHistory.length < 5) {
      setGuessHistory([...guessHistory, inputValue])
      setInputValue('')
    }
  })

  const handleReset = (() => {
    setGuessHistory([])
    setInputValue('')
    setAnswer(WORDS.FIVEWORDS[Math.floor(Math.random()*WORDS.FIVEWORDS.length)])
  })

  useEffect(() => {
    // 答えを生成
    setAnswer(WORDS.FIVEWORDS[Math.floor(Math.random()*WORDS.FIVEWORDS.length)])
  },[])

  return (
    <AllWrapper>
      <Header>
        WORDLE
      </Header>
      <div>
        <button
          className="button"
          onClick={handleReset}
          >
          Reset
        </button>
      </div>
      <MainWrapper>
        <Board 
          guessHistory={guessHistory} 
          answer={answer}
        />
        <form 
          className="inputWrapper"
          onSubmit={handleSubmit}
          >
          <input
            autoComplete="off"
            type="text"
            className="input"
            onChange={handleInputChange}
            value={"" || inputValue}
          />
        </form>
      </MainWrapper>
    </AllWrapper>
)
}

export default MyApp
