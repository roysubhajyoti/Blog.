import { useRecoilValue } from "recoil";
import { responseAtom } from "../atom/atoms";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Skeleton } from "../Skeleton/Skeleton";

const PostDetail = ({
  author,
  content,
  cover,
  summery,
  title,
  createdAt,
  updatedAt,
  _id,
}) => {
  const { id } = useRecoilValue(responseAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col w-2/3 m-auto mt-5">
      <div className="flex flex-col items-center p-10 gap-1">
        <h1 className="text-5xl font-serif font-semibold text-center dark:text-white ">
          {title}
        </h1>
        <h3 className="text-gray-400 ">{createdAt}</h3>
        <h2 className="font-bold font-serif dark:text-white">
          {author?.firstname.toUpperCase()} {author?.lastname.toUpperCase()}
        </h2>
        {author?._id === id && (
          <Link
            to={`/edit/${_id}`}
            className=" flex gap-1 dark:text-white border-blue-200 border px-3 py-1 rounded-md bg-blue-600 text-white"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 dark:text-gray-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </span>{" "}
            Edit Post{" "}
          </Link>
        )}
      </div>
      <div className="flex justify-center relative rounded-lg overflow-hidden">
        <img
          src={"http://localhost:3000/" + cover}
          alt="img"
          // className="w-96 h-44 "
          className="transition-all duration-300  relative z-0 rounded-lg hover:scale-110"
        />
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-xl  p-12 dark:text-white"
      />
    </div>
  );
};

export default PostDetail;
