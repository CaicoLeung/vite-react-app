import React from 'react'
import { propsAreEqual } from '#UTILS';

interface IProps {
  count: number;
}

const ComA: React.FC<IProps> = (props) => {
  console.log("ComA 的render 逻辑执行了");

  return (
    <div>
      子组件A的内容: {props.count}
    </div>
  )
}

export default React.memo(ComA)