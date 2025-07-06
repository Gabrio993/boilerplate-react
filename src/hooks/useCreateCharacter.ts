import { useMutation } from "@tanstack/react-query";
import { createCharacter } from "../api/api";
const useCreateCharacter = () => {
  return useMutation({
    mutationFn: createCharacter,
  });
};

export default useCreateCharacter;
