interface MarqueeProps {
  imgSrc: string;
}

export const MarqueeItem: React.FC<MarqueeProps> = ({ imgSrc }) => {
  return (
    <span className=" sm:mx-[20px] sm:w-[300px] w-[200px] flex flex-col items-center justify-center">
      <img src={imgSrc} className="w-[60%]"></img>
    </span>
  );
};
