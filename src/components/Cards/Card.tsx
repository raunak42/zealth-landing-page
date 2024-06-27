interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}
export const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="border-[3px] border-[#294b8a] rounded-xl h-[200px] w-[150px] lg:h-[240px] lg:w-[220px] xl:h-[300px]  xl:w-[260px] flex flex-col items-center px-2 py-4 my-4">
      <div className="flex flex-col items-center">
        <img className="size-[50px] lg:size-[60px] xl:size-[100px]" src={imageSrc}></img>
        <h1 className="text-sm lg:text-lg xl:text-2xl text-[#294b8a] font-semibold">{title}</h1>
      </div>
      <div className="mt-6 flex flex-col items-center    h-full justify-between">
        <p className="text-center text-xs xl:text-sm text-[#294b8a] line-clamp-2 xl:line-clamp-none">{description}.</p>
        <button className="bg-[#fc516d] text-white px-4 xl:py-1 rounded-2xl w-[80px] xl:w-[100px] hover:translate-y-[-4px] transition-all hover:bg-green-500">
          More
        </button>
      </div>
    </div>
  );
};
