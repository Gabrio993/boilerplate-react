import { Link } from "react-router";
import useHome from "../hooks/useHome";

export default function Home() {
  const { data, isLoading, error } = useHome();
  const results = data?.results;

  if (isLoading) return <p>Caricamento...</p>;
  if (error) return <p>Errore nel caricamento</p>;

  return (
    <div className="p-4 mt-14">
      <ul className="grid grid-cols-2 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {results?.map((r) => (
          <li key={r.id} className="flex flex-col items-center bg-white rounded shadow p-2 cursor-pointer">
            <Link to={`/character/${r.id}`} className="w-full">
              <img src={r.image} alt={r.name} className="w-full h-auto rounded" />
              <p className="mt-2 text-center font-medium">{r.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
