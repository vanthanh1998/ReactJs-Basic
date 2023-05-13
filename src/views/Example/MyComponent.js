import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: 1, title: "Dev", salary: "1000" },
      { id: 2, title: "QA", salary: "500" },
      { id: 3, title: "QC", salary: "700" },
    ],
  };

  addNewJob = (job) => {
    let currenJobs = this.state.arrJobs;
    currenJobs.push(job);
    this.setState({
      arrJobs: currenJobs,
      // arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJob = (job) => {
    let currenJobs = this.state.arrJobs;
    currenJobs = currenJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currenJobs,
    });
  };

  render() {
    console.log(">>> render state: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default MyComponent;
