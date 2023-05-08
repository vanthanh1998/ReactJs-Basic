import React from "react";

class ChildComponent extends React.Component {
  render() {
    console.log(">>> render props:", this.props);
    let { name, age } = this.props;
    return (
      <>
        <div>child component: {name}</div>
        <div>age: {age}</div>
      </>
    );
  }
}

export default ChildComponent;
