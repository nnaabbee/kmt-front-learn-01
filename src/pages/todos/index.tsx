import type { NextPage } from "next"
import React from "react"

type TodoStatus = "NEW" | "PROCESSING" | "DONE"

type Todo = {
  id: number
  title: string
  text: string
  status: TodoStatus
  created_at: Date
}

const sampleTodos: Todo[] = [
  { id: 1, title: "タイトル1", text: "タスクの中身１", status: "NEW", created_at: new Date() },
  { id: 2, title: "タイトル2", text: "タスクの中身２", status: "PROCESSING", created_at: new Date() },
  { id: 3, title: "タイトル3", text: "タスクの中身３", status: "DONE", created_at: new Date() },
]

const Todo: NextPage = () => {
  // const generateTodos = (todos: Todo[]) => {
  //   const todoElements = []
  //   for (let i = 0; i < todos.length; i++) {
  //     const todo = todos[i]
  //     const todoElement = (
  //       <li style={{ listStyle: "none" }}>
  //         {todo.id} - {todo.title} - {todo.text} - {todo.status}
  //       </li>
  //     )
  //     todoElements.push(todoElement)
  //   }
  //   return todoElements
  // }
  return (
    <React.Fragment>
      <h1>Your Todo</h1>
      <ul>
        {/* map関数を使用する */}
        {sampleTodos.map((todo) => (
          <li key={todo.id} style={{ listStyle: "none" }}>
            {todo.id} - {todo.title} - {todo.text} - {todo.status}
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

// page componentはdefaultでexportする
export default Todo
