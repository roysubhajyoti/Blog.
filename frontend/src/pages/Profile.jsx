import { UserDetails } from "../componennt/UserDetails";
import { AllPostsByWriter } from "../componennt/AllPostsByWriter";

export const Profile = () => {
  return (
    <div className="dark:bg-midnight bg-white w-full min-h-screen dark:text-white flex relative py-7">
      <section className="w-1/5 ml-[1rem] dark:bg-slate-900 bg-slate-500 h-3/4 flex justify-center items-center fixed top-24 rounded-xl drop-shadow-lg">
        <UserDetails />
      </section>
      <section className="w-4/5 min-h-screen ml-[21%] m-auto flex flex-col gap-6 ">
        <AllPostsByWriter />
      </section>
    </div>
  );
};
