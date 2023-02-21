import React, { useState } from "react";
// import "./App.css";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [user, setUser] = useState(true);
  const [listItem, setListItems] = useState([]);
  const [checkedVal, setCheckedVal] = useState([]);

  const allowUser = (e) => {
    e.preventDefault();
    setUser(true);
  };

  // add item to todo list app
  const addTodo = () => {
    if (user) {
      setListItems((prev) => {
        return [...prev, todo];
      });
      setTodo("");
    } else {
      window.alert("please login to add a todo!!");
    }
  };

  //   onchange function
  const onChangeHandler = (e) => {
    let text = e.target.value;
    setTodo(text);
  };

  //   functions to check the perticular items
  const checkItem = (event) => {
    // let text = event.target.value;
    let updatedList = [...checkedVal];
    if (event.target.checked) {
      updatedList = [...checkedVal, event.target.value];
      console.log("updated",updatedList)
    } else {
      updatedList.splice(checkedVal.indexOf(event.target.value), 1);
    }
    setCheckedVal(updatedList);
  };

  // delete a todo item
  const deleteTodo = (id) => {
    console.log("deleting: ", id);
    setListItems((prev) => {
      return prev.filter((elem, index) => {
        return index !== id;
      });
    });
  };

  // clear all check items
  const deleteChecked = () => {
    console.log("click delete All")
    console.log("list", listItem)
    console.log(checkedVal)
    const filteredArray = listItem.filter(
      (item,index) => !checkedVal.includes(index.toString())
    );
    setListItems(filteredArray);

    console.log("b-----", filteredArray);
  };

  // edit an todo
  const editTodo = (id) => {
    console.log("editing: ", id);
  };

  return (
    <div className="main-container">
      {/* <div id="allow">
        <form action="#">
          <input type="email" placeholder="Email" required />
          <br />
          <input type="password" name="password" required />
          <button type="submit" onClick={allowUser}>
            Login
          </button>
        </form>
      </div>
      <br />
      <br /> */}

      <div>
        <input
          type="text"
          name="name"
          placeholder="add todo"
          value={todo}
          onChange={onChangeHandler}
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
        <div id="container">
          {listItem.map((item, id) => {
            return (
              <div className="items" key={id}>
                <div>
                  <input
                    type="checkbox"
                    onChange={checkItem}
                    name="check"
                    value={id}
                  />
                  <span>{item}</span>
                </div>
                <div className="buttons">
                  <button onClick={() => editTodo(id)}>edit</button>
                  <button onClick={() => deleteTodo(id)}>delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="buttons-all">
        <button type="submit" onClick={deleteChecked}>
          Clear all completed
        </button>
        <h3>Total Items: {listItem.length}</h3>
      </div>
    </div>
  );
};

export default Todo;
