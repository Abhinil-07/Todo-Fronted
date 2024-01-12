import axios from "axios";
import { useState } from "react";
// import "./index.css"
const Todo = ({ todos, fetchData }) => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
  };
  const [btnText, setBtnText] = useState("Mark as completed")
  return (
    <div style={containerStyle}>
      {todos.map(function (todo, index) {
        return (
          <div
            style={{ border: "1px solid white", padding: 2, marginTop: 4 }}
            key={todo._id}
          >
            <h2>
              {index + 1}. {todo.title}
            </h2>
            <p>{todo.description}</p>
            <p style={{ padding: 2 }}>
              Status:{todo.completed === false ? "Pendng" : "Completed"}
            </p>
            <button
              onClick={async function () {
                console.log(todo._id);
                await axios.put(
                  "https://todo-backend-lac-omega.vercel.app/edit-todos",
                  {
                    id: todo._id,
                  }
                );
                alert("Updated");
                setBtnText("Completed")
                fetchData();
              }}
            >
              {btnText}
            </button>
            <button
              onClick={async function () {
                await axios
                  .delete(
                    `https://todo-backend-lac-omega.vercel.app/delete-todo/${todo._id}`
                  )
                  .then(() => {
                    alert("Todo deleted successfully")
                    fetchData();
                  
                  })
                  .catch((error) => {
                    console.error(
                      "Delete failed:",
                      error.response ? error.response.data : error.message
                    );
                    
                  });
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
