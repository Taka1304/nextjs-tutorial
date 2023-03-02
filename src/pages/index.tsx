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
  // 入力フィールドの値
  const [inputValue, setInputValue] = useState<string>('')
  // 解答履歴
  const [guessHistory, setGuessHistory] = useState<string[]>([])
  // 問題の答え
  const [answer, setAnswer] = useState<string>('')

  // 入力フィールドが更新されるとき
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

  // Resetボタンを押した時
  const handleReset = (() => {
		// [課題]Resetボタンを押したときに、初期化する
    // 初期値がどうなればいいのか、考えてみよう。
    // set~~~() ←この()の中に初期値を入れる

    // setInputValue()
    // setGuessHistory()
    // setAnswer()
  })

  useEffect(() => {
    // [課題]答えをランダムで生成する
    // set~~~() ←この()の中に生成したものを入れる
    const words = WORDS.FIVEWORDS
    
    // setAnswer()

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