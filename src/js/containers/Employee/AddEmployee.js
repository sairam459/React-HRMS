import React, { Component, Fragment } from "react";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.random(100),
      first: "",
      last: "",
      age: "",
      tasks: [],
      invalidMessage: false
    };
  }

  showPopup(id, e) {
    var modal = document.getElementById(id);
    modal.style.display = "block";
    modal.style["z-index"] = 1000;
  }
  closePopup(bid, e) {
    var modal = document.getElementById(bid);
    modal.style.display = "none";
  }
  closeandSave(bid) {
    if (
      this.state.first !== "" &&
      this.state.last !== "" &&
      this.state.age !== ""
    ) {
      const { id, first, last, age, tasks } = this.state;
      this.props.saveEmployee({ id, first, last, age, tasks });
      var modal = document.getElementById(bid);
      modal.style.display = "none";
      this.setState({
        id: Math.random(100),
        first: "",
        last: "",
        age: "",
        tasks: [],
        invalidMessage: false
      });
    } else {
      this.setState({ invalidMessage: true });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Fragment>
        {/* <a
          className="btn modal-trigger"
          onClick={this.showPopup.bind(this, this.props.bid)}
        >
          {this.props.buttonText}
        </a> */}
        <a
          className="btn-floating waves-effect waves-light red"
          onClick={this.showPopup.bind(this, this.props.bid)}
        >
          <i className="material-icons">add</i>
        </a>

        <div id={this.props.bid} className="modal">
          <div className="modal-content">
            <h4>Add Employee</h4>
            <h6 hidden={!this.state.invalidMessage}>!! form is invalid</h6>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="col s6">
                    <input
                      name="first"
                      type="text"
                      className="validate"
                      onChange={this.handleChange.bind(this)}
                      value={this.state.first}
                    />
                    <label htmlFor="text" data-error="invalid">
                      First Name
                    </label>
                  </div>
                  <div className="col s6">
                    <input
                      type="text"
                      name="last"
                      className="validate"
                      onChange={this.handleChange.bind(this)}
                      value={this.state.last}
                    />
                    <label>Last Name</label>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <input
                      name="age"
                      type="number"
                      className="validate"
                      onChange={this.handleChange.bind(this)}
                      value={this.state.age}
                    />
                    <label>Age</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-action modal-close waves-effect waves-green btn-flat "
              onClick={this.closeandSave.bind(this, this.props.bid)}
            >
              ADD
            </a>
            <a
              href="#!"
              className="modal-action modal-close waves-effect waves-green btn-flat"
              onClick={this.closePopup.bind(this, this.props.bid)}
            >
              CANCEL
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddEmployee;
