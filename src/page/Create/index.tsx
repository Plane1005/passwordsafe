import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './style.less'
import { Steps, Form, message, Button, Tooltip } from 'antd'
import copy from 'copy-to-clipboard'

const { Step } = Steps

const Create: React.FC = (props: any) => {
  const [current, setCurrent] = useState<number>(3)
  const [form] = Form.useForm()
  const history = useHistory()

  const handleClick = (e) => {
    console.log(e)
    copy(e.target.innerHTML)
    message.success('已复制')
  }

  return (
    <div className="g-create">
      <div className="m-create">
        <div className="m-step">
          <Steps current={current}>
            <Step title="Input Details" description="请输入您的信息" />
            <Step title="Input Password" description="请输入要测试的密码" />
            <Step title="Analysis" description="结果分析" />
            <Step title="Generate" description="强口令生成" />
          </Steps>
        </div>
        <Tooltip title="点击复制">
        <div className="m-passwd" onClick={handleClick}>
            Password
        </div>
        </Tooltip>
        <div>
        <Button
            type="primary"
            size="large"
            style={{ marginRight: 50 }}
            onClick={() => {
              history.goBack()
            }}
          >
            上一步
          </Button>
        <Button
            type="primary"
            size="large"
            onClick={() => {
            }}
          >
            重新生成强口令
          </Button>
          </div>
      </div>
    </div>
  )
}

export default Create
