import React from "react";
// 1. Import the following APIs to use react-router-dom.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import TodoList from "./pages/TodoList";

// 2. Create a function called Router and write it as follows.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;