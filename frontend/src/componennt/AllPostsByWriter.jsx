import { useRecoilValue } from "recoil";
import { responseAtom } from "../atom/atoms";

export const AllPostsByWriter = () => {
  const writerInfo = useRecoilValue(responseAtom);

  return (
    <div>
      <h1 className="dark:text-white ">
        Welcome Back{""}
        <span className="dark:text-amber-200 text-3xl font-bold font-Playpen  px-5">
          <i>{writerInfo?.firstName}</i>
        </span>
      </h1>
      <h2 className="text-start"> All Posts : </h2>
      <div></div>
    </div>
  );
};
