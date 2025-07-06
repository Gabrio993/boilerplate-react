import { useQuery } from "@tanstack/react-query";
import { fetchList } from "../api/api";

const useHome = (page: number) => {
  return useQuery({
    queryKey: ["Characters", page],
    queryFn: () => fetchList(page),
    staleTime: 1000 * 60 * 5,
  });
};

export default useHome;
