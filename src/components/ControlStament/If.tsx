import React from 'react'

interface IfProps {
  condition: unknown;
  fallback?: React.ReactNode;
  children?: React.ReactNode;
}

const If: React.FC<IfProps> = (props) => {
  const { children, condition, fallback } = props
  return (
    <>{condition ? children : fallback}</>
  )
}

export default React.memo(If)
