const API_BASE_URL = "https://rickandmortyapi.com/api";

export const fetchList = async (): Promise<ApiCharacterResponse> => {
  const response = await fetch(`${API_BASE_URL}/character`);
  console.log("[list response]", response);
  if (!response.ok) {
    throw new Error("Errore nel caricamento delle attrezzature");
  }
  const data = await response.json();
  console.log(data.results);
  return data;
};

export const fetchElementById = async (id: string | number): Promise<Character> => {
  const response = await fetch(`${API_BASE_URL}/character/${id}`);
  console.log("[id response]", response);
  if (!response.ok) {
    throw new Error("Errore nel caricamento delle attrezzature");
  }
  return response.json();
};

export const createElement = async (newElement: Character): Promise<Character> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newElement),
  });

  if (!response.ok) {
    throw new Error("Errore nell'aggiunta del personaggio");
  }

  return response.json();
};
