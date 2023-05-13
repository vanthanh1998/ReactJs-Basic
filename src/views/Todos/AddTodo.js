import react from "react";
import { toast } from "react-toastify";

class AddTodo extends react.Component {
  state = {
    title: "",
  };

  handleOnChaneTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleAddTodo = (e) => {
    e.preventDefault();

    if (!this.state.title) {
      toast.error(`Missing title's Todo!`);
      return;
    }

    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);

    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(e) => this.handleOnChaneTitle(e)}
        ></input>
        <button
          type="button"
          className="add"
          onClick={(e) => this.handleAddTodo(e)}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
