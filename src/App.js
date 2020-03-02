import React, { Component } from "react";

class FormsAndInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "abhishek thakur"
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log(data);
  };
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  componentDidMount() {
    this.setState({
      fullName: "Justin"
    });
  }
  render() {
    const { fullName } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Forms and Inputs</h1>
          <p>Full name is: {fullName}</p>
          <input
            type="text"
            placeholder="Your name"
            name="fullName"
            value={fullName}
            onChange={this.state.handleInputChange}
          ></input>
          <button>Send</button>
        </form>
      </div>
    );
  }
}
export default FormsAndInputs;
