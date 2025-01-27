import { useInfiniteQuery } from "@tanstack/react-query";
import { getMyPosts } from "../../services/apiPosts";
import { useSearchParams } from "next/navigation";

export function useMyPosts() {
  const searchParams = useSearchParams();

  const filters = {
    search: searchParams.get("search"),
    category: searchParams.get("category"),
    sort: searchParams.get("sort"),
  };

  const { data, error, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["myPosts", filters],
      queryFn: ({ pageParam }) =>
        getMyPosts({ ...filters, page: pageParam, limit: 20 }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage?.length === 0) return;
        return allPages.length + 1;
      },
      retry: false,
    });

  const posts = data?.pages?.flat() ?? [];

  return { isLoading, posts, error, fetchNextPage, hasNextPage };
}
