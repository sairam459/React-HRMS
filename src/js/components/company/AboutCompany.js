import React, { Component } from "react";

class AboutCompany extends Component {
  render() {
    return (
      
        <div>
        <h4> Watch the video to know more about company </h4>
        <video id="videoPlayer" controls>
          <source src={"http://localhost:8080/hrms/getVideo/?token="+localStorage.getItem('token')} type="video/mp4" />
        </video>
        </div>
    );
  }
}

export default AboutCompany;
