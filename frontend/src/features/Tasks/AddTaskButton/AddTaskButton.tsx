import { Plus } from "lucide-react";
import Button from "../../../components/Button/Button";

function AddTaskButton() {
  return (
    <Button type="button" buttonStyle="secondary">
      <>
        <Plus /> Add new task
      </>
    </Button>
  );
}

export default AddTaskButton;
