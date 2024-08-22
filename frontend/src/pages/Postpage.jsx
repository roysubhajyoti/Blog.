import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostDetail from "../componennt/PostDetail";
export const Postpage = () => {
  const [postInfo, setPostInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPostInfo = async () => {
      const Post = await axios.get(
        `http://localhost:3000/api/v1/blog/post/${id}`
      );

      setPostInfo(Post.data);
    };
    fetchPostInfo();
  }, []);

  return (
    <div>
      <PostDetail {...postInfo} />
    </div>
  );
};
