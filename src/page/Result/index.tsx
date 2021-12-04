import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { CheckCircleTwoTone } from '@ant-design/icons'
import './style.less'
import { Steps, Form, Input, Button, Timeline } from 'antd'
import simg from '@/assets/success.png'
import wimg from '@/assets/warning.png'
import eimg from '@/assets/error.png'

const { Step } = Steps

const Result: React.FC = (props: any) => {
  const [current, setCurrent] = useState<number>(2)
  const [form] = Form.useForm()
  const history = useHistory()

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <div className="g-result">
      <div className="m-result">
        <div className="m-step">
          <Steps current={current}>
            <Step title="Input Details" description="请输入您的信息" />
            <Step title="Input Password" description="请输入要测试的密码" />
            <Step title="Analysis" description="结果分析" />
            <Step title="Generate" description="强口令生成" />
          </Steps>
        </div>
        <div className="m-title">
          <img src={simg} alt="" />
          <div className="u-title">您的密码强度为：强</div>
        </div>
        <div className="m-content">
          <h3>
            检测报告
            <em />
          </h3>
          <div className="u-content">
            <Timeline>
              <Timeline.Item color="green">密码长度</Timeline.Item>
              <Timeline.Item color="red">
              包括大小写字母、数字和符号
              </Timeline.Item>
              <Timeline.Item color="red">
                不是单纯个人信息的组合
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
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
              history.push('create')
            }}
          >
            生成强口令
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Result
