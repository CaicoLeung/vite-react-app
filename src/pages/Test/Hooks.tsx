import { MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import { useBoolean, useReactive } from 'ahooks';
import { Button, Card, Col, Divider, Input, Row, Space } from 'antd';
import React from 'react';

const HooksPage: React.FC = () => {
  const [visible, actions] = useBoolean(false);
  const state = useReactive({
    defaultItem: 'caico',
    list: ['hi', 'hello'],
    addItem(item: string) {
      this.list.push(item);
    },
    get listLength() {
      return this.list.length;
    },
  });

  return (
    <Card title="hooks示例">
      <Button type={visible ? 'primary' : 'default'} onClick={() => actions.toggle()}>
        toggle: {`${visible}`}
      </Button>
      <Divider />
      <div>state.listLength: {state.listLength}</div>
      <Space>
        <Input
          value={state.defaultItem}
          onChange={(e) => {
            state.defaultItem = e.target.value;
          }}
        />
        <Button
          icon={<PlusCircleFilled />}
          onClick={() => state.addItem(state.defaultItem)}
        ></Button>
        <Button icon={<MinusCircleFilled />} onClick={() => state.list.pop()}></Button>
      </Space>
      <Row gutter={[6, 8]}>
        {state.list.map((item, index) => (
          <Col key={index} span={4}>
            {item}
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default HooksPage;
