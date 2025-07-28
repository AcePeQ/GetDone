import { EllipsisVertical } from "lucide-react";
import styles from "./ColumnOptions.module.css";
import ButtonCreate from "../../../components/ButtonCreate/ButtonCreate";
import ColumnDeleteForm from "../ColumnDeleteForm/ColumnDeleteForm";

function ColumnOptions({ columnId }: { columnId: string }) {
  return (
    <button aria-label="column options">
      <EllipsisVertical aria-disabled />

      <ul className={styles.menu}>
        <li>
          <ButtonCreate
            modalTitle="Edit Column"
            buttonTitle="Edit"
            buttonStyle="edit"
            isIcon={false}
          >
            <div>Edit</div>
          </ButtonCreate>
        </li>
        <li>
          <ButtonCreate
            modalTitle="Delete Column"
            buttonTitle="Delete"
            buttonStyle="delete"
            isIcon={false}
          >
            <ColumnDeleteForm columnId={columnId} />
          </ButtonCreate>
        </li>
      </ul>
    </button>
  );
}

export default ColumnOptions;
