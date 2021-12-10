import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN' // 引入中文包
import App from './App'
import './App.less'


const Root: React.FC = () => (
  <ConfigProvider locale={zhCN}>
      <App />
  </ConfigProvider>
)
ReactDOM.render(<Root />, document.getElementById('root'))
