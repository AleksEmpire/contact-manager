import React, { Component } from "react";
import Contact from "../contact/Contact";
import { Consumer } from "../context/Context";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              <div className="contact-wrapper">
                {contacts.map((contact) => (
                  <Contact key={contact.id} contact={contact} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
