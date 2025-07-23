import { LogOut } from "lucide-react";
import Button from "../Button/Button";

function ButtonLogout() {
  return (
    <Button type="button" buttonStyle="primary">
      <>
        <p className="sr-only">logout button</p>
        <LogOut aria-disabled />
      </>
    </Button>
  );
}

export default ButtonLogout;
