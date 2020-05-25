import React, { Component } from "react";
import { Consumer } from "../context/Context";
import TextInputGroup from "../addContact/TextInputGroup";
import axios from "axios";

export default class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }

  updateContact = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const updContactData = {
      name: name,
      email: email,
      phone: phone,
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContactData
    );

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    // Clear State
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
                <div className="card-header">Edit Contact</div>
                <div className="card-body">
                  <form onSubmit={this.updateContact.bind(this, dispatch)}>
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
                      value="Update Contact"
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
