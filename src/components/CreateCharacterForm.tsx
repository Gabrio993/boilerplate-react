import { useState } from "react";
import useCreateCharacter from "../hooks/useCreateCharacter";

const CreateCharacterForm = () => {
  const { mutate, isPending, isSuccess, isError, error } = useCreateCharacter();

  const [formData, setFormData] = useState<Character>({
    name: "",
    status: "",
    species: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <>
      <h1 className="text-center mt-14 font-medium">Add Character</h1>
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <div>
          <label className="block">Nome</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>

        <div>
          <label className="block">Status</label>
          <input type="text" name="status" value={formData.status} onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>

        <div>
          <label className="block">Specie</label>
          <input type="text" name="species" value={formData.species} onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={isPending}>
          {isPending ? "Creazione in corso..." : "Crea personaggio"}
        </button>

        {isSuccess && <p className="text-green-600">Personaggio creato!</p>}
        {isError && <p className="text-red-600">Errore: {error.message}</p>}
      </form>
    </>
  );
};

export default CreateCharacterForm;
