import "../styles/Todo.css";
export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}
interface TodoProps {
  todo: TodoItem;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}
const Todo = ({
  todo,
  toggleComplete,
  removeTodo,
}: TodoProps): React.ReactNode => {
  return (
    <>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <span className="todo-text">{todo.text}</span>
        <button
          className="toggle-button"
          onClick={() => toggleComplete(todo.id)}
        >
          Toggle Complete
        </button>
        <button className="remove-button" onClick={() => removeTodo(todo.id)}>
          Remove item
        </button>
      </li>
    </>
  );
};

export default Todo;
