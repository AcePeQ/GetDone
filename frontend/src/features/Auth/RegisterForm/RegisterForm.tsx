import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./RegisterForm.module.css";
import InputRow from "../../../components/InputRow/InputRow";
import Button from "../../../components/Button/Button";
import { useRegister } from "../useRegister";
import { toast } from "react-toastify";

type RegisterInputs = {
  email: string;
  username: string;
  password: string;
};

function RegisterForm({
  onChangeToLoginPanel,
}: {
  onChangeToLoginPanel: () => void;
}) {
  const { isPending, registerAccount } = useRegister();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    registerAccount(data, {
      onSuccess: (data) => {
        toast.success(data.message);
        onChangeToLoginPanel();
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
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format: example@gmail.com",
            },
          })}
          type="text"
          id="email"
          placeholder=" "
          disabled={isPending}
        />
      </InputRow>
      <InputRow label="Username" id="username" error={errors.username?.message}>
        <input
          {...register("username", {
            required: "Username field is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-@]+$/,
              message: "Invalid username format",
            },
          })}
          type="text"
          id="username"
          placeholder=" "
          disabled={isPending}
        />
      </InputRow>
      <InputRow label="Password" id="password" error={errors.password?.message}>
        <input
          {...register("password", {
            required: "Password field is required",
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};:'"\\|,.<>?~`]).{8,}$/,
              message:
                "Password must be at least 8 characters long and include at least one letter, one number, and one special character",
            },
          })}
          type="password"
          id="password"
          placeholder=" "
          disabled={isPending}
        />
      </InputRow>

      <Button isDisabled={isPending} type="submit" buttonStyle="primary">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
