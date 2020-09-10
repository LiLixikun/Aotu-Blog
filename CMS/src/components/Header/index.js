import React from 'react';

import './index.less';
// import Utils from '../../utils/utils'
import Language from './components/language'
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <Language {...this.props} />
      </div>
    );
  }
}
