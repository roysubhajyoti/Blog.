import { useEffect, useState } from "react";
import { Post } from "../componennt/Post";
import axios from "axios";
import { Skeleton } from "../Skeleton/Skeleton";

export const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const allPost = async () => {
      const responsePost = await axios.get(
        "http://localhost:3000/api/v1/blog/post"
      );
      setPosts(responsePost.data);
      setLoading(false);
    };
    allPost();
  }, []);

  if (loading) {
    return <Skeleton text={"Loading"} />;
  }

  return (
    <div className=" min-h-screen p-5 ">
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} {...post} />)}
    </div>
  );
};
