import React from "react";
import "./App.css";
import {Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Todo from "./Todo";
import Clint_Panel from "./Clint_Panel";
import Admin_panel from "./Admin_panel";
const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="clientpanel" element={<Clint_Panel />} />
        <Route path="adminpanel" element={<Admin_panel />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default App;
