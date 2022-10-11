import { InputWithLabel } from "@/components/InputWithLabel"
import { table } from "console"
import type { NextPage } from "next"
import Image from "next/image"
import React, { useCallback, useState } from "react"
import styled from "styled-components"

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

  const [title, setTitle] = useState("今日の必須タスク")
  const [text, setText] = useState("散歩する")

  return (
    <React.Fragment>
      <h1>Your Todo</h1>
      <InputWithLabel label="タイトル" value={title} onChangeHandler={setTitle} />
      <InputWithLabel label="テキスト" value={text} onChangeHandler={setText} />
      <button onClick={() => alert(`title:${title}\ntext:${text}`)}>Todo作成</button>
      <ul>
        {/* map関数を使用する */}
        {sampleTodos.map((todo) => (
          <TodoRow key={todo.id}>
            <p>{todo.id}</p>
            <p>{todo.title}</p>
            <p>{todo.text}</p>
            <p>{todo.status}</p>
            <ImageWrapper onClick={() => alert(`削除 ID:【${todo.id}】`)}>
              {/* srcは/から始める、altとwidthとheightは必須 */}
              <Image src="/icon_minus_white.svg" alt="delete" width="24px" height="24px" />
            </ImageWrapper>
          </TodoRow>
        ))}
      </ul>
    </React.Fragment>
  )
}

// page componentはdefaultでexportする
export default Todo

// ===style
const TodoRow = styled.li`
  align-items: center;
  column-gap: 10px;
  display: flex;
`

const ImageWrapper = styled.div`
  cursor: pointer;
  :hover {
    opacity: 0.75;
  }
`
