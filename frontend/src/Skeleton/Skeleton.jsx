export const Skeleton = ({ text }) => {
  return (
    <div className="dark:text-orange-300 font-Playpen text-2xl flex justify-center items-center h-screen">
      <svg
        width="200"
        height="50"
        viewBox="0 0 200 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="10"
          y="35"
          className="text-4xl fill-current text-black dark:text-orange-300 font-Playpen tracking-wider "
        >
          {text || "loading"}
          <tspan className="animate-dot">.</tspan>
          <tspan className="animate-dot delay-[0.5s]">.</tspan>
          <tspan className="animate-dot delay-[1s]">.</tspan>
        </text>
      </svg>
    </div>
  );
};
