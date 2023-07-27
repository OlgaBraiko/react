import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/Todo.form";
import TodoList from "./components/Todos/Todo.list";

function App() {
  const [todos, setTodos] = useState([]);

  //ф-ия для новых задач
  const addTodoHandler = (text) => {
    setTodos([...todos, text]); //разбираем массив todos на элементы и добавляем текст
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index)); //удаление выполненой задачи, фильтр оставляет элемент если выражение истина
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
