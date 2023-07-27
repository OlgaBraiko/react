import Todo from "./Todo";
//import styles from '';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div> //исп индекс так как нет ничего уникального
  );
}

export default TodoList;
