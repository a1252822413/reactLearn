/*
 * @Author: sheng
 * @Date: 2021-01-26 14:20:50
 * @LastEditTime: 2021-01-26 14:25:56
 * @FilePath: /reactlearn/src/components/demo.tsx
 */
import React from 'react'
interface IProp {
  change?: () => void
}
const DemoComp: React.FC<IProp> = ({ change }) => {
  return (
    <div
      onClick={() => {
        change && change()
      }}>
      组价
    </div>
  )
}

export default DemoComp
