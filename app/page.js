'use client'
import List from "./components/List";
import { useState } from "react";
import Add from "./components/Add";


export default function Home() {
  const [list, setList] = useState({})
  console.log("%c 💀: Home -> list ", "font-size:16px;background-color:#37a5de;color:white;", list)
  console.log(list)

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setList(prev => {
      const next = { ...prev }
      const id = Object.keys(list).length
      next[id] = { completed: false, id, value }
      return next
    })
  }

  const handleComplete = (e, id) => {
    e.preventDefault();
    setList(prev => {
      const next = { ...prev[id] }
      next.completed = true
      console.log(next, 2)
      prev[id] = next
      console.log(prev, 1)
      return prev
    })
  }
  const handleDelete = (e, id) => {
    e.preventDefault();
    setList(prev => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  }



  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Add onSubmit={handleSubmit} />
      <List list={list} onComplete={handleComplete} onDelete={handleDelete} />
    </div>
  );
}
