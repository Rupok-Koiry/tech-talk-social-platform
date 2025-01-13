"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ApiException } from "@/utils/handleApiRequest";

export function useSignup() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      toast.success("Signup successful");
      router.push("/");
    },
    onError: (error) => {
      // Handle ApiException or fallback to generic error
      const message =
        error instanceof ApiException
          ? error.message
          : "An unexpected error occurred";
      toast.error(message);
    },
  });

  return { signup, isPending };
}
