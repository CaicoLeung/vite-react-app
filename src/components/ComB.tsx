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
    return (count: number) => (
      <div>
        子组件B的数字内容: {count}
      </div>
    )
  }, [props.count])

  const textElement = useMemo(() => {
    console.log('ComB 的renderText 执行了')

    return (text: string) => (
      <div>
        子组件B的文本内容: {text}
      </div>
    )
  }, [props.text])

  return (
    <div>
      {countElement(props.count)}
      {textElement(props?.text ?? '')}
    </div>
  )
}

export default React.memo(ComB, propsAreEqual<IProps>((preProps, nextProps) => preProps.count === nextProps.count && preProps.text === nextProps.text))