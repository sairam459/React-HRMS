import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAnalysisData } from "../../actions/Employee";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";

class Analysis extends Component {
  componentDidMount() {
    var me=this;
    this.props.getAnalysisData(this.props.loggedinEmployee).catch(() => {
      me.setState({ toastMessage: "Connection Failure", toastFlag: true });
    });
  }
  render() {
    return (
      <Fragment>
        <div>
          <h5>Performance Analysis of your Employees </h5>
          <div className="analysis">
            <BarChart width={800} height={300} data={this.props.analysisdata}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="performance" />
              <Tooltip />
              <Legend />
              <Bar dataKey="performance" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedinEmployee: state.loggedinEmployee,
    analysisdata: state.analysisdata
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAnalysisData: getAnalysisData
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis);
