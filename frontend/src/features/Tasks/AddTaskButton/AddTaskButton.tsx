import ButtonCreate from "../../../components/ButtonCreate/ButtonCreate";
import AddTaskForm from "../AddTaskForm/AddTaskForm";

import { useMediaQuery } from "react-responsive";

function AddTaskButton() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 925px)" });

  return (
    <ButtonCreate
      modalTitle="New Task"
      buttonTitle={isTabletOrMobile ? "" : "Add New Task"}
      buttonStyle="task"
      isIcon={true}
    >
      <AddTaskForm />
    </ButtonCreate>
  );
}

export default AddTaskButton;
