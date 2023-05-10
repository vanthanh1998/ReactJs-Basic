import React from 'react';

class AddComponent extends React.Component {
  state = {
    title: '',
    salary: '',
  };

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('>>> check data input:', this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });
  };
  render() {
    return (
      <>
        <form>
          <label for="fname">Job title:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) =>
              this.handleChangeTitle(event)
            }
          />
          <br />
          <label for="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) =>
              this.handleChangeSalary(event)
            }
          />
          <br />
          <br />
          <input
            type="submit"
            onClick={(event) =>
              this.handleSubmitForm(event)
            }
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
