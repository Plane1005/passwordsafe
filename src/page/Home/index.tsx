import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './style.less'
import { Steps, Form, Input, Button, DatePicker, message } from 'antd'
import axios from 'axios'
import { INFO, RES, setInfo, setRes } from '../Store/index'

const { Step } = Steps

const Home: React.FC = (props: any) => {
  const [current, setCurrent] = useState<number>(0)
  const [form] = Form.useForm()
  const history = useHistory()

  const onFinish = (values: any) => {
    // console.log('Success:', values)
    setInfo(values)
    axios
      .post('http://localhost:2333/api/safe/test', values)
      .then((res) => {
        // console.log("res", res);
        setRes(res?.data?.data)
        history.push('result')
      })
      .catch((err) => {
        message.error('发生错误')
      })
  }

  const onFinishFailed = (errorInfo: any) => {
    message.error("信息不完善！")
  };

  return (
    <div className="g-form">
      <div className="m-form">
        <div className="m-step">
          <Steps current={current}>
            <Step title="Input Details" description="请输入您的信息" />
            <Step title="Input Password" description="请输入要测试的密码" />
            <Step title="Analysis" description="结果分析" />
            <Step title="Generate" description="强口令生成" />
          </Steps>
        </div>
        <div className="m-detail">
          <Form name="basic" initialValues={ INFO || { remember: true }} onFinish={onFinish} form={form} onFinishFailed={onFinishFailed} >
            <div className="m-first" style={{ display: current == 0 ? 'block' : 'none' }}>
              <Form.Item label="姓名" name="name" rules={[{ required: true, message: '请输入姓名' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="手机号" name="mobile" rules={[{ required: true, message: '请输入手机号' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="出生日期" name="birth" rules={[{ required: true, message: '请输入出生日期' }]}>
                <DatePicker />
              </Form.Item>
              <Form.Item label="身份证后四位" name="person" rules={[{ required: true, message: '请输入身份号' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="QQ号" name="qq" rules={[{ required: true, message: '请输入QQ号' }]}>
                <Input />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setCurrent(1)
                  }}
                >
                  下一步
                </Button>
              </Form.Item>
            </div>
            <div className="m-two" style={{ display: current == 1 ? 'block' : 'none' }}>
              <Form.Item label="测试密码" name="passwd" rules={[{ required: true, message: '请输入测试密码' }]}>
                <Input.Password placeholder="请输入测试密码" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  type="primary"
                  style={{ marginRight: 15 }}
                  onClick={() => {
                    setCurrent(0)
                  }}
                  size="large"
                >
                  上一步
                </Button>
                <Button type="primary" htmlType="submit" size="large">
                  提交
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Home
