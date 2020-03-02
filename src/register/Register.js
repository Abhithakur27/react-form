import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      email: e.target.value
    });
  };
  passChange = e => {
    console.log(e.target);
  };
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={this.state.email} //read the stored value from state
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
