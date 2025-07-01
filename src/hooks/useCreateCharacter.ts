import { useMutation } from "@tanstack/react-query";
import { createElement } from "../api/api";
const useCreateElement = () => {
  return useMutation({
    mutationFn: createElement,
  });
};

export default useCreateElement;
