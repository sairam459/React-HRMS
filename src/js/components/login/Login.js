import React, { Component } from "react";
import { Button } from "react-materialize";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login, setRole } from "../../actions/Employee";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      password: "",
      authState: true,
      loggedinEmployee: ""
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  loginCheck() {
    this.props.login(this.state);
  }
  componentDidMount() {
    localStorage.setItem("token", null);
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.loggedinEmployee !== false) {
      this.setState({ authState: true });
      this.props.setRole(nextProps.loggedinEmployee);
      if (nextProps.loggedinEmployee.role === "manager") {
        this.props.history.push("/dashboard/employees");
      } else {
        this.props.history.push("/dashboard/account");
      }
    } else {
      this.setState({ authState: false });
    }
  };
  render() {
    return (
      //  <li name = {this.props.employeeName}><Link to="/clients">{this.props.employeeName}</Link></li>

      <div className="login">
        <div className="loginbox">
          <div className="wrapper">
            <h5>Login</h5>
          </div>
          <label>
            User id:
            <input
              type="text"
              onChange={this.handleChange.bind(this)}
              name="userid"
              value={this.state.userid}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              onChange={this.handleChange.bind(this)}
              name="password"
              value={this.state.password}
            />
          </label>

          <div hidden={this.state.authState}>
            <h6>username or password is invalid</h6>
          </div>
          <div className="wrapper">
            <Button waves="light" onClick={this.loginCheck.bind(this)}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedinEmployee: state.loggedinEmployee,
    role: state.role
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      login: login,
      setRole: setRole
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
