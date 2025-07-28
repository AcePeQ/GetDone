import { EllipsisVertical } from "lucide-react";
import styles from "./ColumnOptions.module.css";
import ButtonCreate from "../../../components/ButtonCreate/ButtonCreate";
import ColumnDeleteForm from "../ColumnDeleteForm/ColumnDeleteForm";
import ColumnEditForm from "../ColumnEditForm/ColumnEditForm";
import type { TColumn } from "../../../stores/useBoardsStore";

function ColumnOptions({ column }: { column: TColumn }) {
  return (
    <div tabIndex={0} aria-label="column options">
      <EllipsisVertical aria-disabled />

      <ul className={styles.menu}>
        <li>
          <ButtonCreate
            modalTitle="Edit Column"
            buttonTitle="Edit"
            buttonStyle="edit"
            isIcon={false}
          >
            <ColumnEditForm column={column} />
          </ButtonCreate>
        </li>
        <li>
          <ButtonCreate
            modalTitle="Delete Column"
            buttonTitle="Delete"
            buttonStyle="delete"
            isIcon={false}
          >
            <ColumnDeleteForm columnId={column._id} />
          </ButtonCreate>
        </li>
      </ul>
    </div>
  );
}

export default ColumnOptions;
