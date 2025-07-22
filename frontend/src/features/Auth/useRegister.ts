import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../../api/authApi";

export type TRegisterData = {
  email: string;
  username: string;
  password: string;
};

export function useRegister() {
  const { isPending, mutate: registerAccount } = useMutation({
    mutationFn: (registerData: TRegisterData) => registerApi(registerData),
  });

  return { isPending, registerAccount };
}
