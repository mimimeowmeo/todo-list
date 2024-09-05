"use client";
import { useState } from "react";
import List from "./List";
import Add from "./Add";
import dayjs from "dayjs";

const App = () => {
  const [list, setList] = useState({});
  const now = dayjs();
  const handleSubmit = (value) => {
    setList((prev) => {
      const next = { ...prev };
      const id = now.valueOf();
      next[id] = { completed: false, id, value };
      return next;
    });
  };

  const handleComplete = (id) => {
    setList((prev) => {
      const next = { ...prev };
      next[id] = { ...next[id], completed: true };
      return next;
    });
  };
  const handleDelete = (id) => {
    setList((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Add onSubmit={handleSubmit} />
      <List list={list} onComplete={handleComplete} onDelete={handleDelete} />
    </div>
  );
};

export default App;
