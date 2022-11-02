import React from "react";
import "./style.css";

function Todo({ data, datas, setDatas }) {
  const deleteHanlder = (Id) => {
    const newDatas = datas.filter((data) => {
      return data.id !== Id;
    });

    setDatas(newDatas);
  };

  const editHandler = (Id) => {
    const newDatas = datas.map((data) => {
      if (data.id === Id) {
        return {...data, isDone: !data.isDone,};
      } else {
        return { ...data };
      }
    });
    setDatas(newDatas);
  };

  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{data.title}</h2>
        <div>{data.body}</div>
      </div>
      <div className="button-set">
        <button
          className="delete-button button"
          onClick={() => deleteHanlder(data.id)}
        >
          Delete
        </button>
        <button
          className="complete-button button"
          onClick={() => editHandler(data.id)}
        >
          {data.isDone ? "Undone" : "Done"}
        </button>
      </div>
    </div>
  );
}

export default Todo;