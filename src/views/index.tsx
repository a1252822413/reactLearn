/*
 * @Author: sheng
 * @Date: 2021-01-22 13:15:35
 * @LastEditTime: 2021-01-22 14:04:20
 * @FilePath: /reactlearn/src/views/index.tsx
 */

import React, { useMemo } from 'react'
import { List, Card, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import routes from '../router/index'
const Index: React.FC = () => {
  const history = useHistory()
  const list = useMemo(() => {
    return routes.map((item: any) => {
      return {
        title: item.desc,
        path: item.path
      }
    })
  }, [])
  return (
    <List
      grid={{ gutter: 10, column: 4 }}
      header={<div>内容</div>}
      dataSource={list}
      renderItem={(item) => {
        return (
          <List.Item>
            <Card title={item.title}>
              <Button
                type='primary'
                onClick={() => {
                  history.push(item.path)
                }}>
                {item.path}
              </Button>
            </Card>
          </List.Item>
        )
      }}
    />
  )
}
export default Index
