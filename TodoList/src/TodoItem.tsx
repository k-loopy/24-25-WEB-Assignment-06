import React from "react";
import styles from "./TodoList.module.less";

type Todo = {
  id: number;
  todoText: string;
  isDone: boolean;
};

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`${styles.todoItem} ${todo.isDone ? styles.done : ""}`}>
      <label className={styles.circleCheckbox}>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={styles.checkmark}></span>
      </label>
      <span className={styles.todoText}>{todo.todoText}</span>
      <button onClick={() => deleteTodo(todo.id)} className={styles.deleteBtn}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
