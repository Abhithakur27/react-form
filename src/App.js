import React, { Component } from "react";
import Register from "./register/Register";
import "bootstrap/dist/css/bootstrap.min.css";

class FormsAndInputs extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fullName: "abhishek thakur"
  //   };
  // }
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const data = this.state;
  //   console.log(data);
  // };
  // handleInputChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  // componentDidMount() {
  //   this.setState({
  //     fullName: "Justin"
  //   });
  // }

  // handlefullName = e => {
  //   // console.log(e.target.value);
  //   this.setState({
  //     fullName: e.target.value
  //   });
  // };

  render() {
    // const { fullName } = this.state;
    // console.log(fullName);

    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
          <h1>Forms and Inputs</h1>
          <p>Full name is: {fullName}</p>
          <input
            type="text"
            placeholder="Your name"
            name="fullName"
            value={fullName}
            onChange={this.handlefullName}
          ></input>
          <button>Send</button>
        </form> */}
        <Register />
      </div>
    );
  }
}
export default FormsAndInputs;
