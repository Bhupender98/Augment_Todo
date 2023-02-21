import React from 'react'
import Todo from "./Todo";

const Admin_panel = () => {
  return (
    <div>
    <div className="nav">
    Admin Panel
        <button>
            Change Password
        </button>
    </div>
      <Todo/>
    </div>
  )
}


export default Admin_panel
