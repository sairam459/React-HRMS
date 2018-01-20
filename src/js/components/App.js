import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "./login/Login";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import "../../css/App.css";

class App extends Component {
  state = {
    isLoggedIn: false,
    loggedinEmployee: false,
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.loggedinEmployee) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  };

  render() {
    return (
      <div className="mainPage">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Login} />
          <Route
            path="/dashboard"
            render={props => {
              if (this.state.isLoggedIn !== false) {
                return <Dashboard />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          <Route component={Login} />
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    loggedinEmployee: state.loggedinEmployee,
  };
}

export default withRouter(connect(mapStateToProps)(App));
