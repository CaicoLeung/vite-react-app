import React, { useState } from 'react';
import logo from '#Images/home/logo.svg';
import ComA from '#Comp/ComA';
import ComB from '#Comp/ComB';
import { Button, Input, Space } from 'antd';
import './index.less';
import { Link } from 'react-router-dom';
import { AlibabaOutlined } from '@ant-design/icons';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [text, setText] = useState<string>('');
  const [errorState, setErrorState] = useState<any>({ message: 'Hello Vite + React!' });

  const errorHandle = () => setErrorState(errorState.error);

  const appTitle = import.meta.env.VITE_APP_TITLE;
  const appEnv = import.meta.env.VITE_CUSTOM_ENV;
  const isProd = import.meta.env.PROD ? 'YES' : 'NO';
  const isDev = import.meta.env.DEV ? 'YES' : 'NO';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{errorState.message}</p>
        <p>当前应用标题：{appTitle}</p>
        <p>当前应用自定义运行环境：{appEnv}</p>
        <p>是否为生产环境：{isProd}</p>
        <p>是否为开发环境：{isDev}</p>
        <Space>
          <Link to="/test">
            <Button type="primary" icon={<AlibabaOutlined />}>
              去ahooks页
            </Button>
          </Link>
          <Button danger onClick={errorHandle}>
            测试页面报错崩溃
          </Button>
        </Space>
        <Space>
          <Button type="primary" onClick={() => setCount(() => count + 1)}>
            count is: {count}
          </Button>
          <Button type="primary" danger onClick={() => setCount2(() => count2 + 1)}>
            count2 is: {count2}
          </Button>
          <Input
            type="text"
            placeholder="组件B的文本内容"
            value={text}
            onChange={(value) => setText(value.target.value)}
          />
        </Space>
        <p>F12打开控制台查看输出信息</p>
        <ComA count={count} />
        <ComB count={count2} text={text} />
      </header>
    </div>
  );
};

Home.displayName = '首页';

export default Home;
