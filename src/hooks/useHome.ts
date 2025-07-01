import { useQuery } from "@tanstack/react-query";
import { fetchList } from "../api/api";

const useHome = () => {
  return useQuery({
    queryKey: ["Characters"],
    queryFn: fetchList,
    staleTime: 1000 * 60 * 5,
  });
};

export default useHome;
