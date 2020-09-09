import React from 'react'
import { Form, Input, Button, Select, Row, Col } from 'antd';

const { Option } = Select;
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
};

export default class Search extends React.Component {
  formRef = React.createRef();
  onGenderChange = value => {
    this.formRef.current.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };
  render() {
    return (
      <Form layout="horizontal" {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
          <Row gutter={18}>
            <Col xl={6} md={12} sm={24}>
                <Form.Item
                    name="note"
                    label="Note"
                    rules={[
                        {
                        required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
            </Col>

            <Col xl={6} md={12} sm={24}>
            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                    {
                    required: true,
                    },
                ]}
                >
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={this.onGenderChange}
                    allowClear>
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
                </Form.Item>
            </Col>
            
            <Col xl={6} md={12} sm={24}>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={this.onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Col>

          </Row>
       
        
    
        
      </Form>
    );
  }
}