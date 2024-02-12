import React, { Component } from "react";

class ValidationMessage extends Component {
  render() {
    const { message } = this.props;

    return <p className="error-message">{message}</p>;
  }
}

export default ValidationMessage;
