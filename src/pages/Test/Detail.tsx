import { JsonPlaceholder } from "#SERVICES";
import { useRequest } from "ahooks";
import { Card, Col, Row, Typography, message } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

const TestDetail: React.FC = () => {
  const { id } = useParams();

  const {data, loading} = useRequest(JsonPlaceholder.getPostDetail, {
    cacheKey: 'PostDetail',
    defaultParams: [id!],
    throttleWait: 2000,
    onSuccess: () => message.success('请求成功'),
    onError: () => message.error('请求失败')
  })

  return (
    <Row justify='center'>
      <Col span={8}>
        <Card title={data?.title} loading={loading}>
          <Typography.Text>
            {data?.body}
          </Typography.Text>
        </Card>
      </Col>
    </Row>
  )

}

export default TestDetail;
