import React, { useReducer } from 'react'
import logo from '#Images/home/logo.svg'
import ComA from '#Comp/ComA'
import ComB from '#Comp/ComB'
import { Button, Col, Input, Row } from 'antd'
import './index.less'
import { Link } from 'react-router-dom'
import { AlibabaOutlined } from '@ant-design/icons'

const Home: React.FC = () => {
  const initState = {
    count: 0,
    count2: 0,
    text: '',
    errorState: 'Hello Vite + React!',
  }

  type State = typeof initState;

  const reducer = (prev: State, next: Partial<State>) => ({ ...prev, ...next })

  const [state, dispatch] = useReducer(reducer, initState);

  const errorHandle = () => dispatch({ errorState: state.errorState.error });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{state.errorState}</p>
        <Row gutter={[4, 8]} justify="center">
          <Col span={12}>
            <Link to="/test">
              <Button type="primary" icon={<AlibabaOutlined />}>
                去ahooks页
              </Button>
            </Link>
          </Col>
          <Col span={12}>
            <Button danger onClick={errorHandle}>测试页面报错崩溃</Button>
          </Col>
          <Col span={8}>
            <Button type="primary" onClick={() => dispatch({count: state.count + 1})}>
              count is: {state.count}
            </Button>
          </Col>
          <Col span={8}>
            <Button type="primary" danger onClick={() => dispatch({count2: state.count2 + 1})}>
              count2 is: {state.count2}
            </Button>
          </Col>
          <Col span={8}>
            <Input type="text" placeholder="组件B的文本内容" value={state.text} onChange={({target}) => dispatch({text: target.value})} />
          </Col>
        </Row>
        <p>
          F12打开控制台查看输出信息
        </p>
        <ComA count={state.count} />
        <ComB count={state.count2} text={state.text} />
      </header>
    </div>
  );
};

Home.displayName = '首页';

export default Home;
