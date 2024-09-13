import { UserDetails } from "../componennt/UserDetails";
import { AllPostsByWriter } from "../componennt/AllPostsByWriter";

export const Profile = () => {
  return (
    <div className="dark:bg-midnight bg-white w-full h-screen dark:text-white flex relative">
      <section className="w-1/5 dark:bg-slate-900 bg-slate-500 h-screen flex justify-center items-center fixed">
        <UserDetails />
      </section>
      <section className="w-4/5 h-full ml-[20%] m-auto flex flex-col gap-6 ">
        <AllPostsByWriter />
      </section>
    </div>
  );
};
