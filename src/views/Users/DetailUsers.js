import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUsers extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);

      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  handleBackButton = () => {
    this.props.history.push(`/user`);
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0; // false => not empty
    return (
      <>
        <div>Detail users with id : {this.props.match.params.id}</div>
        {isEmptyObj === false && (
          <>
            <div>
              Name: {user.first_name} - {user.last_name}
            </div>
            <div>Email: {user.email}</div>
            <div>
              <img src={user.avatar}></img>
            </div>
            <div>
              <button type="button" onClick={() => this.handleBackButton()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUsers);
