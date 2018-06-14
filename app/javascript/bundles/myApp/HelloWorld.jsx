import PropTypes from 'prop-types';
import React from 'react';

export default class HelloWorld extends React.Component {
  static propTypes = {
    msg: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      msg: this.props.msg
    };
  }

  render() {
    return (
      <div>
        Hi {this.state.msg}
      </div>
    );
  }
}
