const PostDetail = ({
  author,
  content,
  cover,
  summery,
  title,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className="flex flex-col w-2/3 m-auto mt-5">
      <div>
        <img
          src={"http://localhost:3000/" + cover}
          alt="img"
          className="w-72 h-60"
        />
      </div>
      <div></div>
    </div>
  );
};

export default PostDetail;
