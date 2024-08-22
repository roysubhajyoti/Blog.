export const Post = ({ title, content, summery, cover, createdAt, author }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <div className="w-3/4 m-auto mt-3 mb-4 flex gap-20  p-4 border border-blue-200 shadow-lg rounded-lg bg-gray-100">
      <div className="border border-green-200 rounded-md shadow-lg">
        <img
          src="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/ChatGPT-vs-Bard-c.png"
          alt="ChatGpt vs Bard"
          className="w-80 h-52 "
        />
      </div>

      <div className="pl-16 flex flex-col p-4 justify-around ">
        <h1 className="text-2xl font-serif font-bold">{title}</h1>
        <div className="flex gap-10 ">
          <h3 className="font-semibold font-serif text-lg">
            {` ${author?.firstname}  ${author?.lastname}`}
          </h3>
          <p className="text-gray-500 font-semibold">{formattedDate} </p>
        </div>
        <p className="text-lg  font-serif text-left">{summery}</p>
      </div>
    </div>
  );
};
