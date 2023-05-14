import React from "react";
import logo from "../../assets/images/sukuna.jpg";

import { withRouter } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/about");
    // }, 3000);
  }
  render() {
    console.log(">>> check props:", this.props);
    return (
      <>
        <div>Hello world home</div>
        <div>
          <img src={logo}></img>
        </div>
      </>
    );
  }
}

export default withRouter(Home);
