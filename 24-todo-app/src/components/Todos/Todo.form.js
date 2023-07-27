import { useState } from "react";
//import styles from "./Todos/Todo.form.modules.css";

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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
