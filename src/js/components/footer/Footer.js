import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">About HRMS</h5>
              <p className="grey-text text-lighten-4">
                You can add and remove Employees from your portal if your role is manager and assign tasks to them.You can Company info and Manage your profile
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Technology Used</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" tab="_blank" href="http://materializecss.com/">
                    Materialize.css
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" tab="_blank" href="https://redux.js.org/">
                   Redux.js
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" tab="_blank" href="https://reactjs.org/">
                    React.js
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" tab="_blank" href="https://nodejs.org/en/">
                    Node.js
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" tab="_blank" href="http://recharts.org/#/en-US">
                    Recharts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
