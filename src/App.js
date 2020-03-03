import React, { Component } from "react";
import Register from "./register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "../src/Signup/Signup";
import Signup from "../src/Signup/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    return (
      <div>
        <Router>
          {/* <Register /> */}
          <Switch>
            <Route exact path="/">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default FormsAndInputs;
