/*
 * @Author: sheng
 * @Date: 2021-01-22 14:23:23
 * @LastEditTime: 2021-01-22 15:11:19
 * @FilePath: /reactlearn/src/views/effectHook.tsx
 */

import React, { useState, useEffect } from 'react'
import { Button } from 'antd'

const EffectHook: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [count2, setCount2] = useState<number>(0)
  useEffect(() => {
    document.title = `clicked ${count + count2} times`
  }, [count, count2])
  return (
    <>
      <div>
        <p>count:{count}</p>
        <Button
          type='primary'
          onClick={() => {
            setCount(count + 1)
          }}>
          点击
        </Button>
        <p>count2:{count2}</p>
        <Button
          type='primary'
          onClick={() => {
            setCount2(count2 + 1)
          }}>
          点击
        </Button>
      </div>
    </>
  )
}
export default EffectHook
