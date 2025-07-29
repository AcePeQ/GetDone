import ButtonCreate from "../../../components/ButtonCreate/ButtonCreate";
import AddTaskForm from "../AddTaskForm/AddTaskForm";

function AddTaskButton() {
  return (
    <ButtonCreate
      modalTitle="Add New Task"
      buttonTitle="Add New Task"
      buttonStyle="task"
      isIcon={true}
    >
      <AddTaskForm />
    </ButtonCreate>
  );
}

export default AddTaskButton;
