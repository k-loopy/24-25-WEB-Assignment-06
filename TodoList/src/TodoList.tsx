import React, { useState } from "react";
import styles from "./TodoList.module.less";

type Todo = {
  id: number;
  todoText: string;
  isDone: boolean;
};

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={styles.todoItem}>
      <label className={styles.circleCheckbox}>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => onToggle(todo.id)}
        />
        <span className={styles.checkmark}></span>
      </label>
      <span className={styles.todoText}>{todo.todoText}</span>
      <button onClick={() => onDelete(todo.id)} className={styles.deleteBtn}>
        삭제
      </button>
    </li>
  );
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = (): void => {
    if (input.trim() === "") {
      alert("등록할 일정을 입력해주세요!");
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      todoText: input,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id: number): void => {
    console.log("Toggle todo:", id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const remainingTodos: number = todos.filter((todo) => !todo.isDone).length;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TodoList</h1>
      <div className={styles.todoInput}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="오늘 할 일을 추가해보세요!"
        />
      </div>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
      <footer className={styles.footer}>
        <span>오늘 할 일 {remainingTodos}</span>
        <button onClick={addTodo} className={styles.footerAddBtn}>
          추가하기
        </button>
      </footer>
    </div>
  );
};

export default TodoList;
