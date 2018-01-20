import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      first: "",
      last: "",
      age: "",
      tasks: [],
      role: "",
      userpic:"one",
      manager: ""
    };
  }

  componentDidMount(nextprops){
      this.setState(this.props.loggedinEmployee)
  }

  render() {
    return (
      <Fragment>
        <div className="row myaccount">
          <h5>Account Information</h5>

          <div className="card-panel  lighten-5">
          <div>
              <h6>Profile Pic</h6>
              <img
                name="userpic"
                src={require("../../../resources/images/" +
                this.state.userpic +
                ".jpeg")}
              />
            </div>
          <div>
              <label>ID</label>
              <input
                name="id"
                type="text"
                className="validate"
                value={this.state.id}
                readOnly
              />
            </div>
            <div>
              <label>First Name</label>
              <input
                name="first"
                type="text"
                className="validate"
                value={this.state.first}
                readOnly
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="last"
                className="validate"
                value={this.state.last}
                readOnly
              />
            </div>
            <div>
              <label>Age</label>
              <input name="age" className="validate" value={this.state.age} />
            </div>
            <div>
              <label>Role</label>
              <input
                name="role"
                type="text"
                className="validate"
                value={this.state.role}
                readOnly
              />
            </div>
            <div className="tasks"  hidden={this.state.role === "manager" ? true : false}>
              <label>Tasks</label>
              <ul>
                {this.state.tasks.map((rec, i) => {
                  return (
                    <li key={i}>
                      <input className="validate" value={rec} readOnly/>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
    return {
        loggedinEmployee: state.loggedinEmployee
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
      },
      dispatch
    );
  }
  export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
  
