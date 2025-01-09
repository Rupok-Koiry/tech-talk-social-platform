import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginWithSocialMedia as loginWithSocialMediaApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useLoginWithSocialMedia() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: loginWithSocialMedia, isPending } = useMutation({
    mutationFn: loginWithSocialMediaApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      toast.success("Login successful");
      router.push("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { loginWithSocialMedia, isPending };
}
