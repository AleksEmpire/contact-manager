import React, { Component } from "react";
import { Consumer } from "../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  getContactInfo = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };

  deleteContact = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
      });
  };
  render() {
    const { showContactInfo } = this.state;
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="contact-item">
              <h4>
                {name}{" "}
                <i
                  className="fa fa-sort-down"
                  style={{ cursor: "pointer" }}
                  onClick={this.getContactInfo}
                ></i>
                <i
                  className="fa fa-times"
                  onClick={this.deleteContact.bind(this, id, dispatch)}
                  style={{ float: "right", color: "red", cursor: "pointer" }}
                ></i>
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fa fa-pencil"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      marginRight: "1rem",
                      color: "#333",
                    }}
                  ></i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
