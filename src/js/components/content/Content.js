import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import EmployeeList from "../../containers/Employee/EmployeeList";
import MyAccount from "../../containers/Employee/MyAccount";
import Analysis from "../../containers/Employee/Analysis";
import AboutCompany from "../company/AboutCompany";
import References from "../references/References";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/dashboard/analysis" component={Analysis} />
          <Route path="/dashboard/employees" component={EmployeeList} />
          <Route path="/dashboard/account" component={MyAccount} />
          <Route path="/dashboard/company" component={AboutCompany} />
          <Route path="/dashboard/references" component={References} />
        </Switch>
      </Fragment>
    );
  }
}

export default Content;
