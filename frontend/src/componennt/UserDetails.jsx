import { useRecoilValue } from "recoil";
import { responseAtom } from "../atom/atoms";

export const UserDetails = () => {
  const writer = useRecoilValue(responseAtom);

  return (
    <div className="min-h-screen  ">
      <div className="flex flex-col items-center gap-3 h-1/2 mt-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-24"
        >
          <path
            fillRule="evenodd"
            d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z"
            clipRule="evenodd"
          />
        </svg>

        <h1 className="font-Playpen font-bold text-white text-lg">
          {writer.firstName.toUpperCase()} {writer.lastName.toUpperCase()}
        </h1>
        <h2 className="font-Playpen text-neutral-50">{writer.username}</h2>
      </div>
    </div>
  );
};
