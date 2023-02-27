import { ChangeEvent, FC, useEffect, useState } from "react";
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

const MainWrapper = styled.div`
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
const REGEXP = /[^A-Z a-z]/g;

const MyApp: FC = () => {
  const [inputValue, setInputValue] = useState("")
  const [answer, setAnswer] = useState<string[]>([])
  const handleInputChange = ((e: ChangeEvent<HTMLInputElement>) => {
    // 大文字にして、半角英字以外消去
    const value = e.target.value.toUpperCase().replace(REGEXP, "")
    
    // 入力を5文字までにする
    if (REGEXP.test(e.target.value) && inputValue.length < 5 || value.length < 5) {
      console.log(inputValue)
      setInputValue(value)
    }
  })
  const handleSubmit = (() => {
    console.log("submit")
    if (inputValue.length === 5) {
      setAnswer([...answer, inputValue])
      setInputValue("")
    }
  })

  useEffect(() => {
    
  },[])

  return (
    <AllWrapper>
      <Header />
      <div>
        <button className="button">Reset</button>
      </div>
      <MainWrapper>
        <Board />
        <div className="inputWrapper">
          <input
            type="text"
            className="input"
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            value={"" || inputValue}
            />
        </div>
      </MainWrapper>
    </AllWrapper>
)
}

export default MyApp
