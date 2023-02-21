import React from "react";
import "./App.css";
import {Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Todo from "./Todo";
const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default App;
