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
// 入力フィールドの制御に使う正規表現, 半角英字のみ許可
const REGEXP = /[^A-Z]/g;

const MyApp: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [guessHistory, setGuessHistory] = useState<string[]>([])
  const [answer, setAnswer] = useState<string>('')

  const handleInputChange = ((e: ChangeEvent<HTMLInputElement>) => {
    // 大文字にして、半角英字以外消去
    const value = e.target.value.toUpperCase().replace(REGEXP, "")
    // 入力を5文字までにする
    if (REGEXP.test(e.target.value) && inputValue.length < 5 || value.length < 5) {
      setInputValue(value)
    }
  })
	// 入力フィールドでEnterを押したとき
  const handleSubmit = ((e: FormEvent) => {
    e.preventDefault()
    // 入力が5文字かつ, まだ5回答えていない場合
    if (inputValue.length === 5 && guessHistory.length < 5) {
      setGuessHistory([...guessHistory, inputValue])
      setInputValue('')
    }
  })

  const handleReset = (() => {
		// [課題]Resetボタンを押したときに、State3つを初期化する

  })

  useEffect(() => {
    // [課題]答えをランダムで生成する

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