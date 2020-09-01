import React from 'react'
import { Card, Button, Modal } from 'antd'
import './../ui.less'
export default class Modals extends React.Component {
     constructor(props) {
         super(props)
         this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false
         }
     }
     handleOpen = (type)=> {
        this.setState({
            ['showModal' +type]: true
        })
     }
     handleConfirm = (type) => {
          Modal[type]({
             title: '确认',
             content: 'Are you sure?',
             onOk() {

             },
             onCancel() {

             }
         })
     }
    render() {
        return (
            <div style={{width: '100%'}}> 
                <Card title="基础模态框" className="card-warp">
                    <Button onClick={()=>this.handleOpen(1)} type="primary">Open</Button>
                    <Button onClick={()=>this.handleOpen(2)} type="primary">自定义页脚</Button>
                    <Button onClick={()=>this.handleOpen(3)} type="primary">顶部20px弹窗</Button>
                    <Button onClick={()=>this.handleOpen(4)} type="primary">水平垂直居中</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1: false
                        })
                    }}
                >

                    <p>欢迎来到的来Liam、柠檬</p>   
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={()=>{
                        this.setState({
                            showModal2: false
                        })
                    }}
                >

                    <p>modal2</p>   
                </Modal>
                <Modal
                    title="React"
                    style={{top: 20}}
                    visible={this.state.showModal3}
                    onCancel={()=>{
                        this.setState({
                            showModal3: false
                        })
                    }}
                >

                    <p>modal3</p>   
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={()=>{
                        this.setState({
                            showModal4: false
                        })
                    }}>
                    <p>modal4</p>   
                </Modal>
                <Card title="信息确认框" className="card-warp">
                    <Button onClick={()=>this.handleConfirm('confirm')} type="primary">Confirm</Button>
                    <Button onClick={()=>this.handleConfirm('info')} type="primary">Info</Button>
                    <Button onClick={()=>this.handleConfirm('success')} type="primary">Success</Button>
                    <Button onClick={()=>this.handleConfirm('warning')} type="primary">Warning</Button>
                </Card>
            </div>
        )
    }
}