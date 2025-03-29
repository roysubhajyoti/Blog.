//integrade tiptap next
// now install react-quill
import axios from "axios";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { Editor } from "../componennt/Editor";

// const logFormData = (formData) => {
//   for (let [key, value] of formData.entries()) {
//     console.log(key, value);
//   }
// };
const CreatePost = () => {
  const Navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState(null);

  const createNewPost = async (e, status) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("summery", summery);
    data.append("content", content);
    data.append("status", status); // "draft" or "publish"
    // data.append("file", file);
    if (files && files.length > 0) {
      data.append("file", files[0]);
    }
    // logFormData(data);

    try {
      const Response = await axios.post(
        "http://localhost:3000/api/v1/blog/post",
        data,

        {
          withCredentials: true,
        }
      );

      if (Response.status === 200) {
        console.log(Response.data.postDoc._id);
        setRedirect(true);
      }
    } catch (err) {
      console.error(err);
      console.log("not published");
    }
  };

  useEffect(() => {
    if (redirect) {
      return Navigate("/");
    }
  }, [redirect, Navigate]);

  return (
    <form className="flex flex-col gap-4 m-auto w-3/4 mt-5">
      <input
        type="title"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-2 h-9 rounded-lg border-green-900 p-3 dark:bg-midnightLite dark:placeholder-midnightLink"
      />
      <input
        type="summery"
        placeholder="summery"
        value={summery}
        onChange={(e) => setSummery(e.target.value)}
        className="border-2 h-9 rounded-lg border-green-900 p-3 dark:bg-midnightLite dark:placeholder-midnightLink"
      />

      <input
        type="file"
        onChange={(e) => setFiles(e.target.files)}
        className="dark:text-white"
      />
      <Editor value={content} onChnage={setContent} />
      <div className="flex justify-between">
        <button
          onClick={(e) => createNewPost(e, "draft")}
          className="border border-green-900 dark:text-white dark:border-midnightLite h-10 font-semibold text-xl rounded-lg cursor-pointer px-9 py-1 bg-blue-600 dark:bg-blue-500  text-center fo"
        >
          Save
        </button>
        <button
          onClick={(e) => createNewPost(e, "published")}
          className="border border-green-900 dark:text-white dark:border-midnightLite h-10 font-semibold text-xl rounded-lg cursor-pointer px-9 py-1 bg-green-700 dark:bg-green-500 text-center fo"
        >
          Publish
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
