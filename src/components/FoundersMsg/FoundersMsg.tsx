import { message } from "./message";

export const FoundersMsg: React.FC = () => {
  return (
    <div className=" grid grid-cols-5 px-8 xl:px-24 gap-16" >
      <div className="flex flex-col col-span-5 md:col-span-3 gap-10">
        <h1 className="text-center text-2xl sm:text-5xl font-semibold text-[#fc516d] ">
          We understand you well.
        </h1>
        <p className="text-xs sm:text-sm text-[#294b8a] md:line-clamp-5 lg:line-clamp-none ">{message.msg}</p>
      </div>

      <div className="col-span-5 md:col-span-2 relative  rounded-2xl h-fit">
        <img
          src="/founders.jpeg"
          className=" rounded-2xl border-[3px] border-[#294b8a]" //mix-blend-overlay
        ></img>
      </div>
    </div>
  );
};
