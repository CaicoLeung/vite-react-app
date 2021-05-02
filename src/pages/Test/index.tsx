import React from 'react'
import { Button, Card, message, Space, Table } from 'antd'
import { useRequest } from 'ahooks'
import type { ColumnsType } from 'antd/lib/table'
import { ReloadOutlined } from '@ant-design/icons'
import { JsonPlaceholder } from '#SERVICES'

const TestPage: React.FC = () => {
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
    <div className="test-page">
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
          scroll={{ y: 800 }}
        />
      </Card>
    </div>
  )
}

TestPage.displayName = "测试页"

export default TestPage
