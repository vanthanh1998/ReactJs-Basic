import React from "react";

// => Class component
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
    console.log(">>> check job:", job);
    this.props.deleteJob(job);
  };

  render() {
    let { arrJobs } = this.props;

    let { showJobs } = this.state;

    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>> check condition showjobs:", check);

    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="list-jobs">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                    &nbsp;
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// => arrow function => use hook
// const ChildComponent = (props) => {
//   let { arrJobs } = props;

//   return (
//     <>
//       <div className="list-jobs">
//         {arrJobs.map((item, index) => {
//           if (item.salary >= 700) {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent;
