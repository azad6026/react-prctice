import React, { useState } from "react";
import "../styles/TodoInput.css";

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput = ({ addTodo }: TodoInputProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
  };

  return (
    <>
      <form className="todo-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new item"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TodoInput;
