import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="bg-black text-white flex justify-center items-center text-xl font-serif  h-screen">
      <div>
        404 not found | please Check the url again ........
        <Link
          to="/"
          className="bg-white text-black py-1 px-2 text-lg rounded-lg hover:bg-green-300"
        >
          ◀️ Home
        </Link>
      </div>
    </div>
  );
};
