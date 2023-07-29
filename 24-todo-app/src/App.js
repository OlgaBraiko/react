import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //импорт уникального идентификатора
import "./App.css";
import TodoForm from "./components/Todos/Todo.form";
import TodoList from "./components/Todos/Todo.list";
import TodosActions from "./components/Todos/TodosAction";
function App() {
  const [todos, setTodos] = useState([]);

  //ф-ия для новых задач
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false, //новая задача
      id: uuidv4(), //генерация id
    };

    setTodos([...todos, newTodo]); //разбираем массив todos на элементы и добавляем объект
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); //удаление выполненой задачи, фильтр
    //оставляет элемент если выражение истина. todo это объект
  };

  const toggleTodoHandler = (id) => {
    //параметр-задача статус которой меняем
    //todo object
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
    //если id задачи === id задачи которая передается в функцию
    //то мы меняем статус на противоположный, перебираем todo и перезаписываем isComleted
    //в противном случае возвращаем предыдущий объект с помощью спред оператора
    //тк как объект ссылочный тип и мы должны создавать новые состояния
  };

  const resetTodosHandler = () => {
    //очищает приложение  удаляя все задачи
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    //удаляет только завершенные задачи
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  //находим завершенные задачи, метод вернет массив с завершенными задачами или пустой
  //исп length чтобы узнать кол-во завершенных задач
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && ( //показываем кнопки только если есть хотя бы одна задача
        <TodosActions
          completedTodosExist={!!completedTodosCount} //конвертируем в логическое значение
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />

      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? "todos" : "todo"
        } `}</h2>
      )}
    </div>
    //показываем текст о кол-ве завершенных задач
  );
}

export default App;
//создаем уникальные идентификаторы, и вместо сроки добавляем объект
//св-ва text,id,статус задачи теперь в объекте todo
// вместо массива строк в компонент передается массив объектов

//после вызова ф-ий reset и delete они становятся доступны в TodoActions
//переходим в этот компонент и привязываем их к св-вам onClick
