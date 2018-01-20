import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Toast from "../../components/toast/Toast";
import { updateEmployee } from "../../actions/Employee";

class EditEmployee extends Component {
  state = {
    id: this.props.currentEmployee ? this.props.currentEmployee.id : null,
    first: this.props.currentEmployee ? this.props.currentEmployee.first : "",
    last: this.props.currentEmployee ? this.props.currentEmployee.last : "",
    age: this.props.currentEmployee ? this.props.currentEmployee.age : "",
    tasks: this.props.currentEmployee ? this.props.currentEmployee.tasks : [],
    performance: this.props.currentEmployee
      ? this.props.currentEmployee.performance
      : "",
    toastFlag: false,
    toastMessage: "Employee Updated Successfully"
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addtask() {
    this.state.tasks.push("");
    this.setState({ tasks: this.state.tasks });
  }

  taskChange(e) {
    var t = this.state.tasks;
    t[e.target.name] = e.target.value;
    this.setState({ tasks: t });
  }
  saveDetails() {
    if (
      this.state.first !== "" &&
      this.state.last !== "" &&
      this.state.age !== ""
    ) {
      this.setState({ invalidMessage: false });
      this.props.updateEmployee(this.state, this.props.employees);
      this.setState({ toastFlag: true });
    } else {
      this.setState({ invalidMessage: true });
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.currentEmployee) {
      this.setState({
        id: nextProps.currentEmployee.id,
        first: nextProps.currentEmployee.first,
        last: nextProps.currentEmployee.last,
        age: nextProps.currentEmployee.age,
        performance: nextProps.currentEmployee.performance,
        tasks: nextProps.currentEmployee.tasks
      });
    }
  };

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
    if (this.props.currentEmployee) {
      return (
        <div className="employee" id="employeecard">
          <div className="row">
            <h6 hidden={!this.state.invalidMessage}>!! form is invalid</h6>
            <div>
              <div className="card-panel blue-grey lighten-5 editemployee">
                <h5>Edit Employee Details</h5>
                <div>
                  <label>First Name</label>
                  <input
                    name="first"
                    type="text"
                    className="validate"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.first}
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last"
                    className="validate"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.last}
                  />
                </div>
                <div>
                  <label>Age</label>
                  <input
                    name="age"
                    className="validate"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.age}
                  />
                </div>
                <div>
                  <label>Performance</label>
                  <input
                    name="performance"
                    className="validate"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.performance}
                  />
                </div>
                <div className="tasks">
                  <label>Tasks</label>
                  <ul>
                    {this.state.tasks.map((rec, i) => {
                      return (
                        <li key={i}>
                          <input
                            className="validate"
                            value={rec}
                            name={i}
                            onChange={this.taskChange.bind(this)}
                          />
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    className="btn-floating waves-effect waves-light green"
                    onClick={this.addtask.bind(this)}
                  >
                    <i className="material-icons">add</i>Add Task
                  </a>
                </div>

                <button
                  className="waves-effect waves-light btn"
                  onClick={this.saveDetails.bind(this)}
                >
                  SAVE
                </button>
                {toasting}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="employee"> Please select an employee</div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    currentEmployee: state.currentEmployee,
    loggedinEmployee: state.loggedinEmployee,
    employees: state.employees
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateEmployee: updateEmployee
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
