import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: ""
    };
  }

  handleChange = e => {
    console.log(e.target.value);

    this.setState({
      email: e.target.value
    });
  };
  passChange = e => {
    console.log(e.target.value);
    this.setState({
      pass: e.target.value
    });
  };
  addSubmit = e => {
    e.preventDefault();
    console.log(e.target.addSubmit);
  };
  render() {
    return (
      <div className="container">
        <button>
          <Link to="/">Home</Link>
        </button>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={this.state.email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              value={this.state.pass}
              className="form-control"
              id="exampleInputPassword1"
              onChange={this.passChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.addSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
