import React, { Component } from "react";
import { throwStatement } from "@babel/types";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      dob: "",
      mobileno: "",
      email: "",
      pass: ""
    };
  }
  handleInputChange = e => {
    console.log(e.target.value); //abhishek 31-11-2019
    console.log(e.target.id); //name dob

    let obj = { ...this.state }; //cloning

    // obj ={
    //     name: "",
    //     dob: ""
    // }

    // let arr = [1, 2, 3, 4];
    // let temp = [...arr];   // Array cloning

    // obj["id"] = "1";  //Add new values to obj
    // obj[key]= value
    // obj["name"]="abhishek"

    obj[e.target.id] = e.target.value; //Adding new value to Object
    this.setState(obj);
    // obj["name"] = "abhishek";
    // obj["dob"] ="31-11-2019"

    // e.target.value = "abhishek"
    // e.target.id="name"

    // obj["name"] = "abhiske"

    console.log("obj", obj);
    // console.log("arr", temp);
  };

  render() {
    return (
      <div className="container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Date of Birth</label>
            <input
              type="date"
              class="form-control"
              id="dob"
              onChange={this.handleInputChange}
              value={this.state.dob}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Mobile No</label>
            <input
              type="number"
              class="form-control"
              id="mobileno"
              onChange={this.handleInputChange}
              value={this.state.mobileno}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
            <small id="email" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="pass"
              onChange={this.handleInputChange}
              value={this.state.pass}
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    );
  }
}
