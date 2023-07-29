import { useState } from "react";
import styles from "./Todo.form.module.css";
import Button from "../UI/Button";

function TodoForm({ addTodo }) {
  //св-во доступно и исп при сабмите

  const [text, setText] = useState(""); //text то что ввел юзер
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText(""); //меняет состояние TodoForm, обнуляем значение в поле ввода
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
