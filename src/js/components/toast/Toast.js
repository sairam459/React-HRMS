import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../../css/App.css";
import classnames from "classnames";
// import { findDOMNode } from "react-dom";

class Toast extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    const modalRoot = document.getElementById("modal-root");
    modalRoot.appendChild(this.el);
    //var a = findDOMNode(this.refs.toasting);
    // setTimeout(function() {
    //   a.className = a.className.replace("show", "");
    // }, 3000);
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById("modal-root");
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <div>
        <div ref="toasting" className={classnames("snackbar", "show")}>
          {this.props.toastMessage}
        </div>
      </div>,
      this.el
    );
  }
}

export default Toast;
