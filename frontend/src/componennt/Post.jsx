import { Link } from "react-router-dom";
export const Post = ({
  _id,
  title,
  content,
  summery,
  cover,
  createdAt,
  author,
}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <div className="w-3/4 m-auto mt-3 mb-4 flex gap-20  p-4 border border-blue-200 shadow-lg rounded-lg bg-gray-100 dark:bg-slate-900 hover:border-blue-500 transition duration-200 ease-in">
      <div className="border border-blue-500 rounded-xl shadow-lg relative overflow-hidden ">
        <Link to={`/post/${_id}`}>
          <img
            src={"http://localhost:3000/" + cover}
            alt="ChatGpt vs Bard"
            className="w-80 h-52 bg-cover rounded-xl z-0 relative transition-all duration-300 hover:scale-110"
          />
        </Link>
      </div>

      <div className="pl-16 flex flex-col p-4 justify-around dark:text-midnighttext">
        <Link to={`/post/${_id}`}>
          <h1 className="text-2xl font-serif font-bold ">{title}</h1>
        </Link>

        <div className="flex gap-10 ">
          <h3 className="font-semibold font-serif text-lg">
            {` ${author?.firstname}  ${author?.lastname}`}
          </h3>
          <p className="text-gray-500 font-semibold">{formattedDate} </p>
        </div>
        <p className="text-lg  font-serif text-left">{summery}</p>
      </div>
    </div>
  );
};
