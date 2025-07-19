import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./LoginForm.module.css";
import InputRow from "../../../components/InputRow/InputRow";

type LoginInputs = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
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
        />
      </InputRow>
      <InputRow label="Password" id="password" error={errors.password?.message}>
        <input
          {...register("password", {
            required: "Password field is required",
          })}
          type="password"
          id="password"
        />
      </InputRow>
    </form>
  );
}

export default LoginForm;
