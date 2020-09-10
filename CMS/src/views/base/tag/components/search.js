import React from 'react'
import { Form, Input, Button, Select, Row, Col } from 'antd';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
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
  onFinish = values => {
      console.log(this.formRef.current.submit)
    console.log(values);
  };
  onSearch = () => {
      
  }
  onReset = () => {
    this.formRef.current.resetFields();
  };
  render() {
    return (
        <div className="search">
            <Form layout="horizontal" {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                <Row gutter={18}>
                    <Col xl={6} md={12} sm={24}>
                        <Form.Item
                            name="tagName"
                            label="标签">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xl={6} md={12} sm={24}>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                查询
                            </Button>
                            <Button style={{marginLeft: '30px'}} htmlType="button" onClick={this.onReset}>
                                清空
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
      </div>
    );
  }
}