import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ComA from '#Comp/ComA'
import ComB from '#Comp/ComB'
import { Button, Card, Input, message, Space, Table } from 'antd'
import "antd/dist/antd.less";
import { useRequest } from 'ahooks'
import { JsonPlaceholder } from './services'
import type { ColumnsType } from 'antd/lib/table'
import { DownloadOutlined, ReloadOutlined } from '@ant-design/icons'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [text, setText] = useState<string>('')
  const albumList = useRequest<JsonPlaceholder.Post[]>(JsonPlaceholder.getPosts, {
    cacheKey: 'postlist',
    onSuccess: () => message.success('请求成功'),
    onError: () => message.error('请求失败')
  })

  const columns: ColumnsType<JsonPlaceholder.Post> = [
    {
      title: 'id',
      dataIndex: 'id',
      width: 200,
      align: 'center'
    },
    {
      title: 'userId',
      dataIndex: 'userId',
      width: 200,
      align: 'center'
    },
    {
      title: 'title',
      dataIndex: 'title',
      width: 300,
    },
    {
      title: 'body',
      dataIndex: 'body',
      width: 500,
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
        <Card
          title="测试useRequest"
          bordered
          extra={(
            <Space>
              <Button key="refresh" icon={<ReloadOutlined />} onClick={albumList.refresh}>刷新</Button>
            </Space>
          )}
        >
          <Table<JsonPlaceholder.Post>
            rowKey="id"
            loading={albumList.loading}
            dataSource={albumList.data}
            tableLayout="fixed"
            columns={columns}
            pagination={false}
          />
        </Card>
      </header>
    </div>
  )
}

export default App
