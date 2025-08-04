import { LogOut } from "lucide-react";
import Button from "../Button/Button";
import { useLogout } from "../../features/Auth/useLogout";
import { useUserStore } from "../../stores/useUserStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ButtonLogout() {
  const navigate = useNavigate();
  const { logout: logoutStore } = useUserStore();
  const { logout, isPending } = useLogout();

  function handleClick() {
    logout(undefined, {
      onSuccess: () => {
        sessionStorage.removeItem("user");
        logoutStore();
        toast.success("Logged out");
        navigate("/", { replace: true });
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  }

  return (
    <Button
      onClick={handleClick}
      isDisabled={isPending}
      type="button"
      buttonStyle="primary"
    >
      <>
        <p className="sr-only">logout button</p>
        <LogOut aria-disabled />
      </>
    </Button>
  );
}

export default ButtonLogout;
