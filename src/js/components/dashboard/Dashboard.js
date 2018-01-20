import React, { Component } from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import Content from "../content/Content";
import "../../../css/App.css";
// import Toast from '../toast/Toast';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        {/*<header className="header"> <Header/></header>*/}
        <div className="bodyregion">
          <nav className="nav-extended cyan lighten-1">
            <Navigation />
          </nav>
          
            <section className="content">
              <Content />
            </section>
         
          <footer className="page-footer cyan lighten-1">
            <Footer />
          </footer>
        </div>
        {/* <aside>
          <SideBar />
        </aside> */}
        {/*<Toast ref="toast" toastMessage="Details updated successfully"/>*/}
      </div>
    );
  }
}

export default Dashboard;
