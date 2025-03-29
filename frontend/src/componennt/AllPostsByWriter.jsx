import { useRecoilValue } from "recoil";
import { responseAtom } from "../atom/atoms";
import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "./Post";
import { Skeleton } from "../Skeleton/Skeleton";
export const AllPostsByWriter = () => {
  const writerInfo = useRecoilValue(responseAtom);
  const [allPost, setAllPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/blog/myposts",
        {
          withCredentials: true,
        }
      );

      setAllPost(response.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  if (loading) {
    return <Skeleton text={"loading"} />;
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-3/4 mt-5">
        <h1 className="dark:text-white ">
          <span className="font-bold font-serif">
            Welcome Back,{" "}
            <i className="font-Playpen text-xl">{writerInfo?.firstName}</i>
          </span>
        </h1>

        <section className="flex gap-4">
          <button className="relative font-mono text-gray-500 text-xl mt-4 ">
            {" "}
            <i>Content Library</i>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
          </button>
          {/* <button className="font-mono text-gray-500 text-xl mt-4">
            Reading List
          </button> */}
        </section>
      </div>
      <div>
        {allPost.length > 0 &&
          allPost.map((post) => <Post key={post._id} {...post} />)}
      </div>
    </div>
  );
};
