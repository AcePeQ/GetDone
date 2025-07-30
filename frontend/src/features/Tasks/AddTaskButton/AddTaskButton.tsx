import ButtonCreate from "../../../components/ButtonCreate/ButtonCreate";
import AddTaskForm from "../AddTaskForm/AddTaskForm";

function AddTaskButton() {
  return (
    <ButtonCreate
      modalTitle="New Task"
      buttonTitle="Add New Task"
      buttonStyle="task"
      isIcon={true}
    >
      <AddTaskForm />
    </ButtonCreate>
  );
}

export default AddTaskButton;
