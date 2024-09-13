import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "../componennt/Editor";
import { useNavigate } from "react-router-dom";
export const EditPost = () => {
  const [redirect, setRedirect] = useState(false);
  const Navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const doc = await axios.get(
        `http://localhost:3000/api/v1/blog/post/${id}`
      );
      setTitle(doc.data.title);
      setContent(doc.data.content);
      setSummery(doc.data.summery);
    };
    fetchPost();
  }, []);

  const UpdatePost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("summery", summery);
    data.append("content", content);
    data.append("id", id);
    if (files) data.append("file", files[0]);
    e.preventDefault();
    // logFormData(data);

    try {
      const Response = await axios.put(
        "http://localhost:3000/api/v1/blog/post",
        data,

        {
          withCredentials: true,
        }
      );

      if (Response.status === 200) {
        console.log(Response.data);
        setRedirect(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (redirect) {
    Navigate(`/post/${id}`);
  }

  return (
    <form
      onSubmit={UpdatePost}
      className="flex flex-col gap-4 m-auto w-3/4 mt-5"
    >
      <input
        type="title"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-2 h-9 rounded-lg border-green-900 p-3 "
      />
      <input
        type="summery"
        placeholder="summery"
        value={summery}
        onChange={(e) => setSummery(e.target.value)}
        className="border-2 h-9 rounded-lg border-green-900 p-3"
      />

      <input
        type="file"
        onChange={(e) => setFiles(e.target.files)}
        className="dark:text-white"
      />
      <Editor value={content} onChnage={setContent} />
      <button className="border border-green-900 h-10 font-semibold text-xl rounded-lg hover:bg-blue-500 hover:text-white dark:text-white">
        Update Post
      </button>
    </form>
  );
};
