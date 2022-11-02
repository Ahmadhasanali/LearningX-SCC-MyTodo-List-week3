import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import "./style.css";

let num=2;

function Form() {
  const dispatch = useDispatch();

  const initialState = {
    id: 0,
    title: "",
    desc: "",
    isDone: false,
  };

  const [data, setData] = useState(initialState);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (data.title === "" || data.body === ""){
      alert('Fill the form')
      return;
    }
    dispatch(addTodo({...data, id: num+=1}));
    setData(initialState)
  };

  return (
    <form className="add-form">
      <div className="input-group">
        <label className="form-label">Title</label>
        <input
          type="text"
          name="title"
          value={data.title}
          className="add-input input-body"
          onChange={changeHandler}
        />
        <label className="form-label">Body</label>
        <input
          type="text"
          name="desc"
          value={data.desc}
          className="add-input"
          onChange={changeHandler}
        />
      </div>
      <button onClick={submitHandler} className="add-button">Save</button>
    </form>
  );
}

export default Form;
