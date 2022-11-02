import React from "react";
import {useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delTodo, statusTodo } from "../../redux/modules/todos";
import "./style.css";

function List() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const navigate = useNavigate();


  const deleteHanlder = (Id) => {
    dispatch(delTodo(Id));
  };

  const editHandler = (Id) => {
    dispatch(statusTodo(Id));
  };


  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <div className="todo-container" key={todo.id}>
                <button className="detail-button" onClick={()=> {navigate(`/${todo.id}`)}}>Detail</button>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.desc}</div>
                </div>
                <div className="button-set">
                  <button
                    className="delete-button button"
                    onClick={() => deleteHanlder(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="complete-button button"
                    onClick={() => editHandler(todo.id)}
                  >
                    {todo.isDone ? "Undone" : "Done"}
                  </button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone === true) {
            return (
              <div className="todo-container"key={todo.id}>
                <button className="detail-button" onClick={()=> {navigate(`/${todo.id}`)}}>Detail</button>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.desc}</div>
                </div>
                <div className="button-set">
                  <button
                    className="delete-button button"
                    onClick={() => deleteHanlder(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="complete-button button"
                    onClick={() => editHandler(todo.id)}
                  >
                    {todo.isDone ? "Undone" : "Done"}
                  </button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
