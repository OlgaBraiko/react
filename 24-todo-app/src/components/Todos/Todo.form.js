import { useState } from "react";
import styles from "./TodoForm.modules.css";
console.log(styles);

function TodoForm({ addTodo }) {
  //св-во доступно и исп при сабмите

  const [text, setText] = useState(""); //text то что ввел юзер
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText(""); //меняет состояние TodoForm, обнуляем значение в поле ввода
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
