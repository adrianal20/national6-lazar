import { Component } from "react";
import "./FormField.css";

export class FormField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      red: {},
    };
  }

  componentDidUpdate(prevProps) {
    const { errors, id } = this.props;
    if (prevProps.errors.length !== errors.length) {
      if (errors.includes(id)) {
        this.setState({ red: { border: "4px solid red" } });
      } else {
        this.setState({ red: {} });
      }
    }
  }

  handleInputChange = (event) => {
    this.props.onHandleFieldChange(event.target.id, event.target.value);
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="contact-form-field">
        <p>{this.props.label}</p>
        <input
          className="input-field one"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          id={this.props.id}
          style={this.state.red}
        />
      </div>
    );
  }
}
