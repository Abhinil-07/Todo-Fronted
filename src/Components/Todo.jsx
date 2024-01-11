import axios from "axios";
// import "./index.css"
const Todo = ({todos,fetchData}) => {

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px', 
       
      };
  return (
    <div style={containerStyle}>
    {todos.map(function (todo,index) {
    return (
        <div style={{ border: '1px solid white',padding:2, marginTop:4}} key={todo._id}>
            <h2>{index+1}. {todo.title}</h2>
            <p>{todo.description}</p>
            <p style={{padding:2}}>Status:{todo.completed === false ? "Pendng" : "Completed"}</p>
            <button onClick={function(){
                console.log(todo._id)
                axios.put("https://todo-backend-lac-omega.vercel.app/edit-todos", {
                   id: todo._id
                  });
                  alert("Updated")
                  fetchData();
            }}>{todo.completed === true ? "Completed" : "Mark as completed"}</button>
        </div>
    );
})}

    </div>
  )
}

export default Todo