import { MarqueeItem } from "../MarqueeItem/MarqueeItem";

export const Partners:React.FC = ()=>{
    return<div className=" flex flex-col justify-start pt-28">
        <div className="flex flex-col  ">
          <div className="w-full flex items-center justify-center">
            <h1 className="text-2xl sm:text-5xl text-[#294b8a] font-semibold">
              Partnerships and Press
            </h1>
          </div>
          <div className="relative flex overflow-x-hidden">
            <div className="py-12 animate-marquee whitespace-nowrap flex flex-row">
              {Array.from({ length: 7 }, (_, index) => {
                return (
                  <MarqueeItem
                    key={index}
                    imgSrc={`/partner${index + 1}.png`}
                  />
                );
              })}
            </div>
            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex flex-row">
              {Array.from({ length: 7 }, (_, index) => {
                return (
                  <MarqueeItem
                    key={index}
                    imgSrc={`/partner${index + 1}.png`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
}