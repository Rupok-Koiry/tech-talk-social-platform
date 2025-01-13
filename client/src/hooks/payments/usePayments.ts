import { useQuery } from "@tanstack/react-query";
import { getAllPayments } from "../../services/apiPayments";

export function usePayments() {
  const {
    isLoading,
    data: payments,
    error,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: () => getAllPayments(),
    retry: false,
  });
  return { isLoading, payments, error };
}
