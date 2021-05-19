import { Component } from "react";
import { FormField } from "./FormField/FormField";
import { FormMessage } from "./FormMessage/FormMessage";
import { SendButton } from "./SendButton/SendButton";

import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      formData: {},
    };
  }

  handleFieldChange = (id, value) => {
    const newFormData = { ...this.state.formData };
    newFormData[id] = value;
    this.setState({ formData: newFormData });
  };

  handleErrors = (errors) => {
    this.setState({ errors });
  };

  render() {
    return (
      <div id="contact-form">
        <FormField
          label="FIRST NAME"
          onHandleFieldChange={this.handleFieldChange}
          id="firstName"
          errors={this.state.errors}
        />
        <FormField
          label="LAST NAME"
          onHandleFieldChange={this.handleFieldChange}
          id="lastName"
          errors={this.state.errors}
        />
        <FormField
          label="EMAIL"
          id="email"
          onHandleFieldChange={this.handleFieldChange}
          errors={this.state.errors}
        />
        <FormMessage
          id="message"
          onHandleFieldChange={this.handleFieldChange}
          errors={this.state.errors}
        />
        <SendButton
          formData={this.state.formData}
          onHandleErrors={this.handleErrors}
        />
      </div>
    );
  }
}

export default Form;
