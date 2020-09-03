import React from 'react'
import { getTagList } from '../../../api/table'
import './../ui.less'
import EditableTable from './components/tableEdit'
import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  }
  const Demo = () => {
    const onFinish = values => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
export default class  TagManage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            value: 'small',
            
        }
    }
    componentDidMount() {
        const postData = {
            pageSize: 10,
            pageNum: 1,
            query:'query'
        }
        getTagList(postData).then(({data})=> {
            console.log(data)
        })  

        console.log(process.env.REACT_APP_NOT_SECRET_CODE)
    }
    render() {
        return (
            <div >
                <Demo />
                <EditableTable />
            </div>
        )
    }
}