import { Button, Result } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

const NoFoundPage: React.FC = () => {
  const history = useHistory();
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起, 您访问的页面不存在。"
      extra={
        <Button type="primary" onClick={history.goBack}>
          返回上一页
        </Button>
      }
    />
  );
};

export default React.memo(NoFoundPage);
