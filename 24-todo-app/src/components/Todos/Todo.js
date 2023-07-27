//import { RITodoFill } from "react-icons/ri";
import styles from "./Todo.modules.css";

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}

export default Todo;
//<RITodoFill className={styles.todoIcon} />
