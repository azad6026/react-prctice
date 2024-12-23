import Todo, { TodoItem } from "./Todo";
import "../styles/TodoList.css";

interface TodoListProps {
  todos: TodoItem[];
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleComplete, removeTodo }: TodoListProps) => {
  return (
    <div className="todo-list">
      <h1 className="todo-list-title">List your items here. Enjoy !</h1>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
