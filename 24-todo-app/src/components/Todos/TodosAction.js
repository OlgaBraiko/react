import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
function TodoActions() {
  return (
    <>
      <Button title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <button title="Clear Completed Todos">
        <RiDeleteBin2Line />
      </button>
    </>
  );
}

export default TodoActions;
