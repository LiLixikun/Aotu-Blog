import React from 'react';
import './index.less';
// import Utils from '../../utils/utils'
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ textAlign: 'center', lineHeight: '60px' }}>
        <h2>Hedaer</h2>
      </div>
    );
  }
}
