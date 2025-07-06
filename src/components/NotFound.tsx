import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-10 mt-14">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">La pagina che stai cercando non esiste.</p>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Torna alla Home
      </Link>
    </div>
  );
}

export default NotFound;
