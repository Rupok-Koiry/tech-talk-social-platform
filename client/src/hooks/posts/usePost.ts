import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../services/apiPosts";
import { useParams } from "next/navigation";

export function usePost() {
  const { postId } = useParams();

  const {
    isLoading,
    data: post,
    error,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId as string),
    retry: false,
  });

  return { isLoading, post, error };
}
