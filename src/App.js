import React, { Component } from "react";
import Header from "./components/header/Header";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/addContact/AddContact";
import EditContact from "./components/editContact/EditContact";
import NotFound from "./page/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="flex-container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route
                  exact
                  path="/contact/add-contact"
                  component={AddContact}
                />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
