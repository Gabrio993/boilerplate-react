import { Link, useSearchParams } from "react-router";
import { useState } from "react";
import useHome from "../hooks/useHome";

export default function Home() {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  const { data, isLoading, error } = useHome(page);
  const results = data?.results;
  const info = data?.info;

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) return <p>Caricamento...</p>;
  if (error) return <p>Errore nel caricamento</p>;

  const getPageNumber = (url: string | undefined) => {
    if (!url) return null;
    const params = new URLSearchParams(url.split("?")[1]);
    return params.get("page");
  };

  const nextPage = getPageNumber(info?.next);
  const prevPage = getPageNumber(info?.prev);

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

      <div className="flex justify-center gap-2.5 mt-6">
        {prevPage && (
          <Link to={`/?page=${prevPage}`} className="px-4 py-2 bg-gray-300 rounded">
            Prev
          </Link>
        )}
        {nextPage && (
          <Link to={`/?page=${nextPage}`} className="px-4 py-2 bg-gray-300 rounded">
            Next
          </Link>
        )}
      </div>

      {/* Bottone per aprire la modale */}
      <div className="flex justify-center mt-8">
        <button onClick={() => setIsModalOpen(true)} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Apri Modale
        </button>
      </div>

      {/* Modale */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <h2 className="text-xl font-bold mb-4">Titolo Modale</h2>
            <p className="mb-4">Qui potrai inserire quello che ti serve.</p>

            <div className="flex justify-end gap-2">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                Chiudi
              </button>
              <button
                onClick={() => {
                  // Puoi aggiungere la logica qui
                  setIsModalOpen(false);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Conferma
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
