//integrade tiptap next
// now install react-quill
import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
const logFormData = (formData) => {
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }
};
const CreatePost = () => {
  const Navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");

  const createNewPost = async (e) => {
    const data = new FormData();
    data.append("title", title);
    data.append("summery", summery);
    data.append("content", content);

    // data.append("file", file);
    if (files) data.append("file", files[0]);
    e.preventDefault();
    logFormData(data);

    try {
      const Response = await axios.post(
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
      console.log(err);
    }
  };

  if (redirect) {
    return Navigate("/dashboard");
  }
  return (
    <form
      onSubmit={createNewPost}
      className="flex flex-col gap-4 m-auto w-3/4 mt-5"
    >
      <input
        type="title"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-2 h-9 rounded-lg border-green-900 p-3"
      />
      <input
        type="summery"
        placeholder="summery"
        value={summery}
        onChange={(e) => setSummery(e.target.value)}
        className="border-2 h-9 rounded-lg border-green-900 p-3"
      />

      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <ReactQuill
        value={content}
        modules={modules}
        formats={formats}
        onChange={(newValue) => setContent(newValue)}
      />
      <button className="border border-green-900 h-10 font-semibold text-xl rounded-lg">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;