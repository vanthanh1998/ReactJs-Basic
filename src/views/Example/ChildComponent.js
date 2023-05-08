import React from "react";

// => Class component
// class ChildComponent extends React.Component {
//   render() {
//     console.log(">>> render props:", this.props);

//     let { name, age, arrJobs } = this.props;

//     return (
//       <>
//         <div className="list-jobs">
//           {arrJobs.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }

// => arrow function => use hook
const ChildComponent = (props) => {
  let { arrJobs } = props;

  return (
    <>
      <div className="list-jobs">
        {arrJobs.map((item, index) => {
          return (
            <div key={item.id}>
              {item.title} - {item.salary}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChildComponent;
