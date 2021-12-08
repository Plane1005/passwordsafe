import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { CheckCircleTwoTone } from '@ant-design/icons'
import './style.less'
import { Steps, Form, Input, Button, Timeline } from 'antd'
import simg from '@/assets/success.png'
import wimg from '@/assets/warning.png'
import eimg from '@/assets/error.png'
import { INFO, RES } from '../Store/index'

const { Step } = Steps

const Result: React.FC = (props: any) => {
  const [current, setCurrent] = useState<number>(2)
  const [form] = Form.useForm()
  const history = useHistory()
  const { r1, r2, r3, r4, score } = RES

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  useEffect(() => {
    console.log('reslut', INFO, RES)
  }, [])

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
          <img src={score === 4 ? simg : score === 3 ? wimg : eimg} alt="" />
          <div className="u-title">
            您的密码强度为：{score === 4 ? '强' : score === 3 ? '中等' : '低'}
          </div>
        </div>
        <div className="m-content">
          <h3>
            检测报告
            <em />
          </h3>
          <div className="u-content">
            <Timeline>
              <Timeline.Item color={r1 === true ? 'green' : 'red'}>
                密码长度
                <span style={{ display: r1 === true ? 'none' : 'block' }} className="u-info">
                  密码短于8
                </span>
              </Timeline.Item>
              <Timeline.Item color={r2 === true ? 'green' : 'red'}>
                包括大小写字母、数字和特殊符号
                <span style={{ display: r2 === true ? 'none' : 'block' }} className="u-info">
                  缺少{r2 instanceof Array ? r2.join(',') : ""}
                </span>
              </Timeline.Item>
              <Timeline.Item color={r3 === true ? 'green' : 'red'}>
                不包含常用字典的内容
                <span style={{ display: r3 === true ? 'none' : 'block' }} className="u-info">
                  密码包含{r3 instanceof Array ? r3.join(',') : ""}
                </span>
              </Timeline.Item>
              <Timeline.Item color={r4 === true ? 'green' : 'red'}>
                不包含个人信息的内容
                <span style={{ display: r4 === true ? 'none' : 'block' }} className="u-info">
                  密码包含{r4 instanceof Array ? r4.join(',') : ""}
                </span>
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
