/*
 * @Author: sheng
 * @Date: 2021-01-22 13:16:53
 * @LastEditTime: 2021-01-22 14:27:32
 * @FilePath: /reactlearn/src/router/index.ts
 */


export default [
  {
    path: '/index',
    desc: '首页',
    component: require('../views/index').default
  }, {
    desc: 'StateHook用法',
    path: '/statehook',
    component: require('../views/statehook').default
  },
  {
    desc: 'effectHook用法',
    path: '/effecthook',
    component: require('../views/effectHook').default
  }
]