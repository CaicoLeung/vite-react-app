import { propsAreEqual } from '@/utils';
import React, { useMemo } from 'react'

interface IProps {
  count: number;
  text?: string;
}

const ComB: React.FC<IProps> = (props) => {
  console.log("ComB 的render 逻辑执行了");

  const countElement = useMemo(() => {
    console.log('ComB 的renderCount 执行了')
    return (
      <div>
        子组件B的数字内容: {props.count}
      </div>
    )
  }, [props.count])

  const textElement = useMemo(() => {
    console.log('ComB 的renderText 执行了')

    return (
      <div>
        子组件B的文本内容: {props.text}
      </div>
    )
  }, [props.text])

  return (
    <div>
      {countElement}
      {textElement}
    </div>
  )
}

export default React.memo(ComB, propsAreEqual<IProps>((preProps, nextProps) => preProps.count === nextProps.count && preProps.text === nextProps.text))