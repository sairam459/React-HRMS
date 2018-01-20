import React, { Component } from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import  { withRouter } from 'react-router-dom';
import { logout } from "../../actions/Employee";

class Navigation extends Component {
  logout(){
    this.props.logout(this.props.loggedinEmployee);
  }
  render() {
    const listyle={
      cursor:'pointer'
    }
    return (
      <div className="sidebar_navigation">
          
        <div className="nav-wrapper">
          
          <a href="#!" className="brand-logo right brandlogo">
        
          Your Portal
          </a>
          <ul className="left hide-on-med-and-down">
           <li>
           <SideBar/>
             </li>
            <li>
              <Link to="/dashboard/account">My Account</Link>
            </li>
            
            <li hidden={this.props.role==="manager"?false:true}>
              <Link to="/dashboard/employees">All Employees</Link>
            </li>

            <li onClick={this.logout.bind(this)} style={listyle}>Log Out
              {/* <Link to="/logout"> Log Out</Link> */}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    role:state.role,
    loggedinEmployee:state.loggedinEmployee
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logout: logout,
    },
    dispatch
  );
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navigation));
