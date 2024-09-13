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
      <h1 className="dark:text-white ">
        <span className="font-bold font-serif">Welcome Back</span>
        <span className="dark:text-amber-200 text-3xl font-bold font-Playpen  px-5">
          <i>{writerInfo?.firstName}</i>
        </span>
      </h1>
      <h2 className="font-mono font-semibold text-xl mt-4 underline underline-offset-8">
        {" "}
        <i>My Content Library</i>
      </h2>
      <div>
        {allPost.length > 0 &&
          allPost.map((post) => <Post key={post._id} {...post} />)}
      </div>
    </div>
  );
};
