import React from 'react'
import { Card, Button, Tabs } from 'antd'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import './../ui.less'
const { TabPane } = Tabs
export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ];
        this.state = {
            defaultActiveKey: 1,
            activeKey: panes[0].key,
            panes,
        };
    }
    onChange = (e) => {
        // console.log(e)
    }
    onChange = activeKey => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        console.log(action,targetKey)
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        console.log(activeKey)
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    }
    render() {
        return (
            <div style={{ width: '100%' }}>
                <Card title="Tab标签" className="card-wrap">
                    <Tabs type="card" defaultActiveKey={this.state.defaultActiveKey} >
                        <TabPane tab={
                            <span>
                                <AndroidOutlined />
                        Tab 1
                      </span>
                        } key="1">
                            <p>Content of Tab Pane 1</p>
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <AppleOutlined />
                        Tab 2
                      </span>
                        } key="2">
                            <p>Content of Tab Pane 2</p>
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <AndroidOutlined />
                        Tab 3
                      </span>
                        } key="3">
                            <p>Content of Tab Pane 3</p>
                        </TabPane>
                    </Tabs>
                </Card>

                <Card title="Tab标签编辑删除" className="card-wrap">
                <div style={{ marginBottom: 16 }}>
                    <Button onClick={this.add}>ADD</Button>
                </div>
                    <Tabs
                        hideAdd
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}>
                        {this.state.panes.map(pane => (
                            <TabPane tab={pane.title} key={pane.key}>
                                {pane.content}
                            </TabPane>
                        ))}
                    </Tabs>
                </Card>
            </div>
        )
    }
}
