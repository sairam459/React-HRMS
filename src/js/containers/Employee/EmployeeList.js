import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getEmployee,
  fetchEmployees,
  saveEmployee,
  deleteEmployee
} from "../../actions/Employee";
import PropTypes from "prop-types";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import Toast from "../../components/toast/Toast";
class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toastFlag: false,
      toastMessage: ""
    };
  }
  componentDidMount() {
    var me=this;
    this.props.fetchEmployees(this.props.loggedinEmployee)
    .catch(() => {
      me.setState({ toastMessage: "Connection Failure", toastFlag: true });
    });
  }
  saveEmployee({ id, first, last, age }) {
    var me=this;
    this.props
      .saveEmployee({ id, first, last, age }, this.props.loggedinEmployee.id)
      .then(() => {
        me.setState({
          toastMessage: "Employee Added Successfully",
          toastFlag: true
        });
      })
      .catch(() => {
        me.setState({ toastMessage: "Connection Failure", toastFlag: true });
      });
  }

  deleteEmployee(id) {
    var me = this;
    this.props
      .deleteEmployee(id, this.props.loggedinEmployee.id)
      .then(() => {
        me.setState({
          toastMessage: "Employee Deleted Successfully",
          toastFlag: true
        });
      })
      .catch(() => {
        me.setState({ toastMessage: "Connection Failure", toastFlag: true });
      });
  }

  render() {
    var me = this;
    var toasting;
    if (this.state.toastFlag) {
      toasting = <Toast toastMessage={this.state.toastMessage} />;
      setTimeout(function() {
        me.setState({ toastFlag: false });
      }, 3000);
    } else {
      toasting = null;
    }

    if (!this.props.employees) {
      return (
        <Fragment>
          <p>There are no employees yet in your collection.</p>
          <AddEmployee
            saveEmployee={this.saveEmployee.bind(this)}
            buttonText="ADD"
            bid="addbutton"
          />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="content">
            <ul className="collection with-header employeelist">
              <li className="collection-header">
                <div className="listheader">
                  <span className="addEmployee">
                    <h5>List of Employees</h5>
                  </span>
                  <AddEmployee
                    saveEmployee={this.saveEmployee.bind(this)}
                    buttonText="ADD EMPLOYEE"
                    bid="addbutton"
                  />
                </div>
              </li>
              {this.props.employees.map(val => {
                return (
                  <li key={val.id} className="collection-item">
                    <div>
                      <a
                        className="secondary-content"
                        onClick={() => this.props.getEmployee(val)}
                      >
                        <i className="material-icons">send</i>
                      </a>
                      <a
                        className="secondary-content"
                        onClick={() => this.deleteEmployee(val.id)}
                      >
                        <i className="material-icons">delete</i>
                      </a>
                      {val.first+" "+val.last}
                    </div>
                  </li>
                );
              })}
            </ul>
            <EditEmployee />
            {toasting}
          </div>
        </Fragment>
      );
    }
  }
}

EmployeeList.propTypes = {
  fetchEmployees: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    employees: state.employees,
    currentEmployee: state.currentEmployee,
    loggedinEmployee: state.loggedinEmployee
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getEmployee: getEmployee,
      fetchEmployees: fetchEmployees,
      saveEmployee: saveEmployee,
      deleteEmployee: deleteEmployee
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
