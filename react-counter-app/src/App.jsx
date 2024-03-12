import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [todos , setTodos] = useState([
    {
      title:"Todo baba",
      discription: "nothing",
      completed : true
    },
    {
      title:"gym",
      discription:"morning",
      completed:false
    }
  ]);
  function newAdd(){
    setTodos([...todos,{
      title : document.getElementById("title").value,
      discription : document.getElementById("discription").value,
      completed : false
    }])
  }
  return <div>
    <input id="title"></input> <br></br>
    <input id="discription"></input> <br></br>
    <button onClick={newAdd}>Add Todo</button>
    {todos.map(function(todo){
      return <Todo title={todo.title} discription={todo.discription}></Todo>
    })}
  </div>
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.discription}</h2>
  </div>
}

export default App
