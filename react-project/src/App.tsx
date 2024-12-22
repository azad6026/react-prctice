// import { useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./projects/todoapp/componens/TodoInput";
import TodoList from "./projects/todoapp/componens/TodoList";
import { TodoItem } from "./projects/todoapp/componens/Todo";
// import Layout from "./projects/game-station/Layout";
// import { Genres } from "./projects/game-station/hooks/useGenres";

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    try {
      const savedTodos = localStorage.getItem("savedTodos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("savedTodos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="todo-app">
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
        <TodoInput addTodo={addTodo} />
      </div>
      {/* <Layout
        onSelectGenre={(genre) => setSelectedGenre(genre)}
      /> */}
    </>
  );
}

export default App;
