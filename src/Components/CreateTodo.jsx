import axios from "axios";
import { useState } from "react";
const CreateTodo = ({fetchData}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        style={{ padding: 10 }}
        value = {title}
        onChange={function (e) {
          const value = e.target.value;
          console.log(value)
          setTitle(value);
        }}
      ></input>{" "}
      <br /> <br />
      <input
        type="text"
        value={description}
        placeholder="description"
        style={{ padding: 10 }}
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      ></input>{" "}
      <br /> <br />
      <button
      style={{marginBottom: 10}}
        onClick={async() => {
          await axios.post("https://todo-backend-lac-omega.vercel.app/create-todo", {
            title: title,
            description: description,
          });
          alert("Todo added");
          setTitle("")
          setDescription("");
          fetchData();
        }}
      >
        Add a todo
      </button>
    </div>
  );
};

export default CreateTodo;
