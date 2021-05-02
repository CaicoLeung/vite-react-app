import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ComA from '#Comp/ComA'
import ComB from '#Comp/ComB'
import { Button, Input, Table } from 'antd'
import "antd/dist/antd.less";
import { useRequest } from 'ahooks'
import { JsonPlaceholder } from './services'
import type { ColumnsType } from 'antd/lib/table'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [text, setText] = useState<string>('')
  const albumList = useRequest<JsonPlaceholder.Albums[]>(JsonPlaceholder.getAlbumList)

  const columns: ColumnsType<JsonPlaceholder.Albums> = [
    {
      title: 'id',
      dataIndex: 'id',
      width: 250,
      align: 'center'
    },
    {
      title: 'title',
      dataIndex: 'title',
      width: 500,
    },
    {
      title: 'userId',
      dataIndex: 'userId',
      width: 250,
      align: 'center'
    },
  ]

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
        <Table<JsonPlaceholder.Albums>
          rowKey="id"
          loading={albumList.loading}
          dataSource={albumList.data}
          tableLayout="fixed"
          columns={columns}
          pagination={false}
        />
      </header>
    </div>
  )
}

export default App
