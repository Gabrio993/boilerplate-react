import { useQuery } from "@tanstack/react-query";
import { fetchElementById } from "../api/api";

const useCharacter = (id: number | string) => {
  return useQuery({
    queryKey: ["Characters", id],
    queryFn: () => fetchElementById(id),
    staleTime: 1000 * 60 * 5,
  });
};
export default useCharacter;
