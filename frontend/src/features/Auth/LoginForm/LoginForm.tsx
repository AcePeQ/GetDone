import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./LoginForm.module.css";
import InputRow from "../../../components/InputRow/InputRow";
import Button from "../../../components/Button/Button";
import { useLogin } from "../useLogin";
import { toast } from "react-toastify";
import { useUserStore } from "../../../stores/useUserStore";
import { useNavigate } from "react-router-dom";

type LoginInputs = {
  email: string;
  password: string;
};

function LoginForm() {
  const navigate = useNavigate();
  const { loginToAccount, isPending } = useLogin();
  const { login } = useUserStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    loginToAccount(data, {
      onSuccess: (data) => {
        login(data);
        sessionStorage.setItem("user", data);
        navigate("/getdone", { replace: true });
      },
      onError: (error) => {
        toast.error(error.message);
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputRow label="Email" id="email" error={errors.email?.message}>
        <input
          {...register("email", {
            required: "Email field is required",
          })}
          type="text"
          id="email"
          placeholder=" "
          disabled={isPending}
        />
      </InputRow>
      <InputRow label="Password" id="password" error={errors.password?.message}>
        <input
          {...register("password", {
            required: "Password field is required",
          })}
          type="password"
          id="password"
          placeholder=" "
          disabled={isPending}
        />
      </InputRow>

      <Button isDisabled={isPending} type="submit" buttonStyle="primary">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
