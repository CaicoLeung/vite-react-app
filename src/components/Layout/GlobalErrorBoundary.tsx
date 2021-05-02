import If from '#Comp/ControlStament/If'
import { PreWrap } from '#Comp/StyledComponents'
import { Button, Result } from 'antd'
import React, { ErrorInfo } from 'react'

interface GlobalErrorBoundaryState {
  error: Error | null;
  stack: string;
}

export default class GlobalErrorBoundary extends React.Component<unknown, GlobalErrorBoundaryState> {
  state = {
    error: null,
    stack: ''
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      stack: errorInfo.componentStack
    })
  }

  render() {
    return (
      <If
        condition={this.state.error}
        fallback={this.props.children}
      >
        <Result
          status="error"
          title="组件内部报错了!"
          subTitle={<PreWrap>{this.state.stack}</PreWrap>}
          extra={
            <Button type="primary" key="console" onClick={() => history.go(0)}>
              刷新
            </Button>
          }
        />
      </If>
    )
  }
}
