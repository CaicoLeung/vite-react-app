import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ComA from '#COMP/ComA'
import ComB from '#COMP/ComB'
import { Button, Input } from 'antd'
import "antd/dist/antd.less";

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [text, setText] = useState<string>('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button type="primary" onClick={() => setCount(() => count + 1)}>
            count is: {count}
          </Button>
          <Button type="primary" danger onClick={() => setCount2(() => count2 + 1)}>
            count2 is: {count2}
          </Button>
          <Input type="text" value={text} onChange={value => setText(value.target.value)} />
        </p>
        <p>
          F12打开控制台查看输出信息
        </p>
        <ComA count={count} />
        <ComB count={count2} text={text} />
      </header>
    </div>
  )
}

export default App
