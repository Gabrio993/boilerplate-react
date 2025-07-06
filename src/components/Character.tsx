import { Link, useParams } from "react-router";
import useCharacter from "../hooks/useCharacter";

const Character = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useCharacter(id!);

  if (isLoading) return <p>Caricamento personaggio...</p>;
  if (error) return <p>Errore nel caricamento</p>;
  console.log("[data c.id]", data);

  return (
    <div className="p-4 mt-14">
      <h1 className="text-2xl font-bold mb-4">{data?.name}</h1>
      <img src={data?.image} alt={data?.name} className="w-64 h-auto rounded" />
      <p className="mt-4">Specie: {data?.species}</p>
      <p>Status: {data?.status}</p>
      <p>Gender: {data?.gender}</p>
      <Link to="/">
        <button className="bg-blue-400 p-2 rounded mt-2 cursor-pointer">Back to Home</button>
      </Link>
    </div>
  );
};
export default Character;
