import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../api/authApi";

export type TLoginData = {
  email: string;
  password: string;
};

export function useLogin() {
  const { isPending, mutate: loginToAccount } = useMutation({
    mutationFn: (loginData: TLoginData) => loginApi(loginData),
  });

  return { isPending, loginToAccount };
}
