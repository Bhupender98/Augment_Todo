import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState(" ");
  const [items, setItems] = useState(["hello", "world"]);

  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(items));
  })

  // handle change event 
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // add a todo item to the list
  const addTodo = () => {
    if (todo === " " || todo.length <= 2) {
      return;
    } else {
      setItems((item) => {
        return [...items, todo];
      });
      setTodo(" ");
    }
  };

  // delete a todo item 
  const deleteItem = (id) => {
    console.log("deleting: ", id);
    setItems((prev) => {
      return prev.filter((elem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          type="text"
          name="todotext"
          onChange={handleChange}
          placeholder="Add Item..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-display">
        {items.map((item, index) => {
          return (
            <div className="items" key={index}>
              <div>
                <span>{item}</span>
              </div>
              <div className="buttons">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5305/5305859.png"
                  onClick={() => deleteItem(index)}
                  className="delete-btn"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
