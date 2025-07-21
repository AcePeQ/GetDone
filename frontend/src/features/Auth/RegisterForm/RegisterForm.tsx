import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./RegisterForm.module.css";
import InputRow from "../../../components/InputRow/InputRow";
import Button from "../../../components/Button/Button";

type RegisterInputs = {
  email: string;
  username: string;
  password: string;
};

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    console.log(data);
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
        />
      </InputRow>
      <InputRow label="Username" id="username" error={errors.username?.message}>
        <input
          {...register("email", {
            required: "Username field is required",
          })}
          type="text"
          id="username"
          placeholder=" "
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
        />
      </InputRow>

      <Button type="submit" buttonStyle="primary">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
