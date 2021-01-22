/*
 * @Author: sheng
 * @Date: 2021-01-22 13:45:42
 * @LastEditTime: 2021-01-22 14:20:21
 * @FilePath: /reactlearn/src/views/statehook.tsx
 */

import React, { useState, useCallback } from 'react'
import { Button } from 'antd'

interface Iobj {
  name: string
  list: any[]
}
const StateHook: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [obj, setObj] = useState<Iobj>({
    name: 'test',
    list: []
  })
  console.log('render')
  return (
    <>
      <div>
        <p>count:{count}</p>
        <Button
          onClick={() => {
            setCount(count + 1)
          }}>
          点击
        </Button>
      </div>
      <div>
        <p>{obj.name}</p>
        <Button
          onClick={() => {
            setObj((obj) => {
              return { ...obj, ...{ name: '呵呵呵' } }
            })
          }}>
          点击
        </Button>
      </div>
    </>
  )
}
export default StateHook
