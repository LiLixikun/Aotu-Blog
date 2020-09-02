import React from 'react'
import { Card, Button, notification } from 'antd'
import './../ui.less'
export default class Notice extends React.Component {
    openNotification = (type) => {
        notification[type]({
            message: 'message',
            description: 'this is message',
        })
    }
    render() {
        return (
            <div style={{width: '100%'}}>
                <Card title="通知提醒框" className="card-warp">
                    <Button type="primary" onClick={()=>this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error')}>Error</Button>
                </Card>
            </div>
        )
    }
}
