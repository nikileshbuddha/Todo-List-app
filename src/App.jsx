import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [todoInputValue, updateInputValue] = useState()
  let [todoList, updateTodos] = useState([
    {
      id: 1,
      task: "Learn React"
    },
    {
      id: 2,
      task: "Learn Angular"
    },
  ])

  let [nextId,setNextId] =  useState(3)

  function addNewTodo() {
    if (todoInputValue == "") {
      alert("Add some task")
    }
    else {
      let newTodo = [
        ...todoList,
        {
          id: nextId,
          task: todoInputValue
        }]
      updateTodos(newTodo);
      updateInputValue("")
      setNextId(nextId + 1)
    }
  }

  function deleteTodo(id) {
    let updatedTasks = todoList.filter(dTask => dTask.id !== id)
    updateTodos(updatedTasks)
  }

  return (
    <>
      <div className='container mt-5 w-50'>
        <h3 className='text-center mb-5 ' style={{fontSize:35}}>Todo App in React</h3>
        <div className='input-group'>
          <input onChange={(e) => {
            let taskValue = e.target.value
            updateInputValue(taskValue)
          }} className='form-control' type='text' value={todoInputValue} />

          <button onClick={() => {
            addNewTodo()
          }} className='btn btn-primary'>Add</button>
        </div>
        <ul className='list-group mt-5'>
          {
            todoList.map((todo) => {
              return (
                <li className='list-group-item'>
                  <p>{todo.task}</p>
                  <button onClick={() => {
                    deleteTodo(todo.id)
                  }} className='btn'>❌</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
