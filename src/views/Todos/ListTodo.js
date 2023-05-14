import react from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends react.Component {
  state = {
    listTodos: [
      { id: "todo1", title: " Doing homework" },
      { id: "todo2", title: " Making videos" },
      { id: "todo3", title: " Fixing bugs" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    let currentListTodo = [...this.state.listTodos, todo];
    this.setState({
      listTodos: currentListTodo,
    });

    toast.success("Add todo success");
  };

  deleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });

    toast.success("Delete succeed");
  };

  editTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    // save
    if (isEmptyObj === false && editTodo.id == todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });

      toast.success("Update todo succeed");
      return;
    }
    // edit
    this.setState({
      editTodo: todo,
    });
  };
  handleOnChaneEditTodo = (e) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = e.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state; // ~~ let listTodos = this.state.listTodos;

    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-container">
        <p>Simple Todo Apps</p>

        <AddTodo addNewTodo={this.addNewTodo} />

        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editTodo.title}
                            onChange={(e) => this.handleOnChaneEditTodo(e)}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <button className="edit" onClick={() => this.editTodo(item)}>
                    {isEmptyObj === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.deleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
