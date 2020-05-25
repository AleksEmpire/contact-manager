import React, { Component } from "react";
import { Consumer } from "../context/Context";
import { v4 as uuidv4 } from "uuid";
import TextInputGroup from "./TextInputGroup";
import axios from "axios";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {},
  };

  addContact = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({
        error: { name: "Name is required" },
      });
      return;
    }
    if (email === "") {
      this.setState({
        error: { email: "Email is required" },
      });
      return;
    }
    if (phone === "") {
      this.setState({
        error: { phone: "Phone is required" },
      });
      return;
    }

    const newContact = {
      id: uuidv4(),
      name: name,
      email: email,
      phone: phone,
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { newContact })
      .then((res) => {
        dispatch({ type: "ADD_CONTACT", payload: res.data });
      });

    this.setState({
      name: "",
      email: "",
      phone: "",
      error: {},
    });
    this.props.history.push("/");
  };

  changeFieldHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, email, phone, error } = this.state;

    return (
      <React.Fragment>
        <Consumer>
          {(value) => {
            const { dispatch } = value;

            return (
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                  <form onSubmit={this.addContact.bind(this, dispatch)}>
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.changeFieldHandler}
                      error={error.name}
                    />
                    <TextInputGroup
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={this.changeFieldHandler}
                      error={error.email}
                    />
                    <TextInputGroup
                      label="Phone"
                      name="phone"
                      placeholder="Enter Phone"
                      value={phone}
                      onChange={this.changeFieldHandler}
                      error={error.phone}
                    />
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-light btn-block"
                    />
                  </form>
                </div>
              </div>
            );
          }}
        </Consumer>
      </React.Fragment>
    );
  }
}
