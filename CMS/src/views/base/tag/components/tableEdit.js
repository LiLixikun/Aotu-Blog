import React, { useState } from 'react';
import { Table, Input, InputNumber, Pagination, Form } from 'antd';
import { getTagList } from '@/api/table'
import guid from '@/utils/guid'
const list = [
  {
    key: 1,
    id: guid(),
    tagName: 'HTML', 
    content: 'html5', 
    status: 1, 
    clickCount: 100,
    createTime: '2020-05-08 10:52:54',
    updateTime: '2020-05-08 10:52:54'
  },
  {
    key: 2,
    id: guid(),
    tagName: 'Node', 
    content: 'node服务器', 
    status: 0, 
    clickCount: 110,
    createTime: '2020-05-08 10:52:54',
    updateTime: '2020-05-08 10:52:54',
  }
]
const getData=()=> {
  // getTagList
}
const EditableCell = ({
  editing,
  dataIndex,
  title,
  record,
  index,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}>
          <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(list);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      // console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: '标签',
      dataIndex: 'tagName',
      width: 100,
      editable: true,
      align: 'center'
    },
    {
      title: '内容',
      dataIndex: 'content',
      width: 150,
      editable: true,
      align: 'center'
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 80,
      editable: true,
      align: 'center'
    },
    {
      title: '点击次数',
      dataIndex: 'clickCount',
      width: 80,
      editable: true,
      align: 'center'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      width: 120,
      editable: true,
      align: 'center'
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      width: 120,
      editable: true,
      align: 'center'
    },

    // {
    //   title: '操作',
    //   dataIndex: 'operation',
    //   render: (_, record) => {
    //     const editable = isEditing(record);
    //     return editable ? (
    //       <span>
    //         <a
    //           href="javascript:;"
    //           onClick={() => save(record.key)}
    //           style={{
    //             marginRight: 8,
    //           }}
    //         >
    //           保存
    //         </a>
    //         <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
    //           <a>取消</a>
    //         </Popconfirm>
    //       </span>
    //     ) : (
    //       <a disabled={editingKey !== ''} onClick={() => edit(record)}>
    //         编辑
    //       </a>
    //     );
    //   },
    // },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        // inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const onChange = (page, pageSize)=> {
    console.log(window.less)
    console.log(page, pageSize)
  }
  const onShowSizeChange = (current, size)=> {
    console.log(current, size)
  }
  return (
    <Form form={form} component={false}>
      <Table
        size="small"
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
      <Pagination 
        total={85} 
        // pageSize={20}
        showSizeChanger 
        showQuickJumper
        showTotal={total => `共 ${total} 条`}
        onChange={onChange}
        onShowSizeChange={onShowSizeChange}
       />
    </Form>
  );
};

export default EditableTable;
