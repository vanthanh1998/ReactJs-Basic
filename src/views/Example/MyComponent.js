import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    alert("submit");
  };

  render() {
    console.log(">>> render state: ", this.state);
    return (
      <>
        <form>
          <label for="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            onClick={(event) => this.handleSubmitForm(event)}
          />
        </form>
        <ChildComponent name={"child one"} age={"25"} />
      </>
    );
  }
}

export default MyComponent;
