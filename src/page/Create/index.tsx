import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './style.less'
import { Steps, Form, message, Button, Tooltip, Spin } from 'antd'
import copy from 'copy-to-clipboard'
import axios from 'axios'

const { Step } = Steps

const Create: React.FC = (props: any) => {
  const [isSpin, setIsSpin] = useState(true)
  const [current, setCurrent] = useState<number>(3)
  const [form] = Form.useForm()
  const history = useHistory()
  const [poem, setPoem] = useState<any>({})

  const handleClick = (e) => {
    // console.log(e)
    copy(e.target.innerHTML)
    message.success('已复制')
  }

  useEffect(() => {
    fetchPoem()
  }, [])

  const fetchPoem = () => {
    setIsSpin(true)
    axios.get('http://localhost:2333/api/safe/passwd').then((res: any) => {
      // console.log(res.data);
      setPoem(res.data.data)
      setIsSpin(false)
    })
  }

  return (
    <div className="g-create">
      <Spin spinning={isSpin}>
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
              {poem.passwd}
            </div>
          </Tooltip>
          <div>
            <Button
              type="primary"
              size="large"
              style={{ marginRight: 50 }}
              onClick={() => {
                history.push('')
              }}
            >
              返回首页
            </Button>
            <Button type="primary" size="large" onClick={fetchPoem}>
              重新生成强口令
            </Button>
          </div>
          <div className="m-intro">
            <h3>
              密码来源
              <em />
            </h3>
            <div className="u-poem">{poem?.poem?.content}</div>
            <div className="u-poet">
              ————{poem?.poem?.author}《{poem?.poem?.category}》
            </div>
            <h3>
              密码解读
              <em />
            </h3>
            <div className="u-intro">
              密码依据返回的诗句的前半部分，构成密码中的大小写部分，使用生成密码时的时间戳，中间截取四或六位作为数字部分，然后再随机选取键盘上的特殊字符构成特殊字符部分随机插入密码中,
              为您生成一个示例强密码，密码仅供参考，使用者可参考此密码的格式，结合信息生成属于自己的密码。
            </div>
            <div className="u-hint">
              请注意！您的密码不可包含您的个人信息和常用密码中的内容！
            </div>
          </div>
        </div>
      </Spin>
    </div>
  )
}

export default Create
