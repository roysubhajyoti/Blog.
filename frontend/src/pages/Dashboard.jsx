import { useEffect, useState } from "react";
import { Post } from "../componennt/Post";
import axios from "axios";

export const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPost = async () => {
      const responsePost = await axios.get(
        "http://localhost:3000/api/v1/blog/post"
      );
      setPosts(responsePost.data);
    };
    allPost();
  }, []);

  return (
    <div className=" h-screen p-5">
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} {...post} />)}
    </div>
  );
};
