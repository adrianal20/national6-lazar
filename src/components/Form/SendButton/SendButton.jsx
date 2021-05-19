import { Component } from "react";

import "./SendButton.css";

export class SendButton extends Component {
  handleOnClick = () => {
    const newErrors = [];
    const allKeys = ["firstName", "lastName", "email", "message"];
    allKeys.forEach((key) => {
      if (!this.props.formData[key]) {
        newErrors.push(key);
      }
    });
    this.props.onHandleErrors(newErrors);
  };

  render() {
    return (
      <div className="send-container">
        <button id="send" onClick={this.handleOnClick}>
          Send
        </button>
      </div>
    );
  }
}
