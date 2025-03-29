import { useRecoilValue } from "recoil";
import { responseAtom } from "../atom/atoms";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Skeleton } from "../Skeleton/Skeleton";
import axios from "axios";
const PostDetail = ({
  author,
  content,
  cover,
  summery,
  title,
  createdAt,
  updatedAt,
  status,
  _id,
}) => {
  const Navigate = useNavigate();
  const { id } = useRecoilValue(responseAtom);
  const [loading, setLoading] = useState(true);
  const [showPublish, setShowPublish] = useState(true);
  const [deletePost, setDeletePost] = useState(false);
  const param = useParams();

  const deletePostHandler = async (postId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/blog/post/${postId}`,

        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        console.log(`post deleted successfully`);
        setDeletePost(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (deletePost) {
      Navigate("/");
    }
  }, [deletePost, Navigate]);

  const publishHandler = async (postId) => {
    try {
      const Response = await axios.patch(
        `http://localhost:3000/api/v1/blog/post/${postId}`,
        { status: "published" },
        {
          withCredentials: true,
        }
      );
      if (Response.status === 200) {
        console.log("your blog has been published successfully", Response.data);
        setShowPublish(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

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

        <div className="flex gap-5">
          <span>
            {author?._id === id && (
              <Link
                to={`/edit/${_id}`}
                className=" flex gap-1 dark:text-white border-blue-200 border px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700"
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
          </span>
          {showPublish && author?._id === id && status === "published" && (
            <button
              onClick={() => deletePostHandler(param.id)}
              className="bg-red-900 bg-opacity-70 hover:bg-opacity-100 hover:bg-red-800 text-white border px-4 rounded-md flex gap-2 text-lg"
            >
              Delete
              <span className="mt-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          )}
          {showPublish && author?._id === id && status === "draft" && (
            <button
              className="bg-green-900  bg-opacity-100 hover:bg-green-800 text-white border px-4 rounded-md flex gap-2 py-1"
              onClick={() => publishHandler(param.id)}
            >
              {" "}
              Publish
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-6 "
              >
                <path
                  fillRule="evenodd"
                  d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
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
