import React, { Component } from "react";
import "../../../css/App.css";
import { connect } from "react-redux";
import { Link} from "react-router-dom";
import { SideNav, SideNavItem} from "react-materialize";

class SideBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      first: "",
      last: "",
      userpic: "one"
    };
  }
  static contextTypes = {
    // router: ""
  };

  componentDidMount() {
    this.setState(this.props.loggedinEmployee);
  }
  getAnalysis() {
    //this.context.router.history.push("/dashboard/analysis");
  }
  render() {
    return (
      <div>
        <SideNav
          trigger={
            <a href="">
              <i className="material-icons left">dehaze</i>
            </a>
          }
          options={{ closeOnClick: true }}
        >
          <SideNavItem
            userView
            user={{
              background: require("../../../resources/images/background3.jpeg"),
              image: require("../../../resources/images/" +
                this.state.userpic +
                ".jpeg"),
              name: this.state.first + " " + this.state.last,
              email: this.state.first + "@gmail.com"
            }}
          />
          <li
            className="waves"
            href=""
            icon="inser_chart"
            hidden={this.props.role === "manager" ? false : true}
          >
            <Link to="/dashboard/analysis">Analysis</Link>
          </li>

          <SideNavItem divider />
          <SideNavItem subheader>Additional</SideNavItem>
          <SideNavItem className="waves" href="https://github.com/sairamcharan459" target="_blank">
           GitHub
          </SideNavItem>
          <li className="waves" href="">
            <Link to="/dashboard/company"> About Company</Link>
          </li>
          <li className="waves" href="">
            <Link to="/dashboard/references"> References</Link>
          </li>
        </SideNav>
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

export default connect(mapStateToProps)(SideBar);
