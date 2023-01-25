import React from 'react'
import { Button, Card, message, Space, Table } from 'antd'
import { useRequest } from 'ahooks'
import type { ColumnsType } from 'antd/lib/table'
import { LeftCircleOutlined, ReloadOutlined } from '@ant-design/icons'
import { JsonPlaceholder } from '#SERVICES'
import { useNavigate } from 'react-router-dom'

const TestPage: React.FC = () => {
  const navigate = useNavigate()
  const albumList = useRequest<JsonPlaceholder.Post[], []>(JsonPlaceholder.getPosts, {
    cacheKey: 'postlist',
    throttleWait: 2000,
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
    {
      title: 'action',
      render: (value, record, index) => (
        <Space>
          <Button onClick={() => navigate(`/test/${record.id}`)}>view</Button>
        </Space>
      ),
    }
  ]

  return (
    <div className="test-page">
      <Card
        title="测试useRequest"
        bordered
        extra={(
          <Space>
            <Button key="back" icon={<LeftCircleOutlined />} onClick={() => navigate(-1)}>返回</Button>
            <Button key="refresh" type="primary" icon={<ReloadOutlined />} onClick={albumList.refresh}>刷新</Button>
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
