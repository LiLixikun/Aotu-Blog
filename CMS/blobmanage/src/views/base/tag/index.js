import React from 'react';
import { getTableList } from '../../../api/table';
import './../ui.less';
import EditableTable from './components/tableEdit';
export default class TagManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      value: 'small',
    };
  }
  componentDidMount() {
    const postData = {
      pageSize: 10,
      pageNum: 1,
      query: 'query',
    };
    getTableList(postData).then(({ data }) => {
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <EditableTable />
      </div>
    );
  }
}
