import Todo from "./Todo";

function TodoList({ todos }) {
  return todos.map((todo, index) => <Todo key={index} todo={todo} />); //исп индекс так как нет ничего уникального
}

export default TodoList;
