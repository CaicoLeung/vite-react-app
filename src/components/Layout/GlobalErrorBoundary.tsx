import If from '#Comp/ControlStament/If';
import { PreWrap } from '#Comp/StyledComponents';
import { Button, Typography, Result } from 'antd';
import type { ErrorInfo } from 'react';
import React from 'react';
import styled from 'styled-components';

interface GlobalErrorBoundaryState {
  error?: Error;
  stack: string;
  visible: boolean;
}

const Card = styled.div`
  min-width: 850px;
  padding: 10px 20px;
  margin: 10px auto;
  text-align: left;
  white-space: pre-wrap;
`;
export default class GlobalErrorBoundary extends React.Component<
  unknown,
  GlobalErrorBoundaryState
> {
  state: GlobalErrorBoundaryState = {
    stack: '',
    visible: false,
  };
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      stack: errorInfo.componentStack,
    });
  }

  render() {
    return (
      <If condition={this.state.error} fallback={this.props.children}>
        <Result
          status="error"
          title={this.state.error?.message}
          subTitle={<PreWrap>{this.state.error?.stack}</PreWrap>}
          extra={[
            <Button type="primary" key="console" onClick={() => window.history.go(0)}>
              刷新
            </Button>,
            <Button key="toggle" onClick={() => this.setState({ visible: !this.state.visible })}>
              {this.state.visible ? '隐藏错误栈信息' : '显示错误栈信息'}
            </Button>,
          ]}
        >
          <If condition={this.state.visible}>
            <Card>
              <Typography.Paragraph>
                <Typography.Title>componentStack: </Typography.Title>
              </Typography.Paragraph>
              <Typography.Paragraph>
                <Typography.Text>{this.state.stack}</Typography.Text>
              </Typography.Paragraph>
            </Card>
          </If>
        </Result>
      </If>
    );
  }
}
