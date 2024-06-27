interface TestimonyCardProps {
  name: string;
  title?: string;
  testimony: string;
  image: string;
}
export const TestimonyCard: React.FC<TestimonyCardProps> = ({
  name,
  title,
  testimony,
  image,
}) => {
  return (
    <div className="w-[220px] h-fit md:w-[480px] sm:h-fit border-[3px] border-[#fc516d] rounded-2xl bg-transparent p-4  flex flex-col gap-8">
      <div className="flex flex-col w-full gap-4">
        <div className="flex items-center justify-between  ">
          <img src="/zealth-logo.svg" className="w-[60%] md:w-[40%] " ></img>
          <div className="border-[3px] border-[#294b8a] rounded-bl-full flex items-center justify-end size-[60px] md:size-[110px] overflow-hidden">
            <img src={image} className=" object-cover "></img>
          </div>
        </div>
        <p className="text-xs  md:text-lg  md:font-bold text-[#fc516d]">{testimony}</p>
      </div>
      <div className="text-[#294b8a]">
        <h1 className="text-lg font-bold">{name}</h1>
        <h1 className="" >{title}</h1>
      </div>
    </div>
  );
};
