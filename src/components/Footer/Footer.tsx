const links = [
  "Home",
  "News",
  "Join us",
  "Contact us",
  "CareShare",
  "Clinical trials",
  "Clinicians",
  "Insurance",
  "Patients",
];

export const Footer: React.FC = () => {
  return (
    <div className="w-full h-[350px] border-t-[1px] border-t-[#294b8a] from-[#fbe6e7] to-white  ">
      <div className="flex flex-col items-center justify-between h-[60%] pt-4">
        <div className="flex flex-col items-center gap-4" >
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#294b8a]">
            Join our mailing list
          </h1>
          <div className="flex flex-row bg-transparent h-[50px] sm:h-[60px] sm:w-[600px]  rounded-full overflow-hidden border-[2px] border-[#fc516d]">
            <input className="w-[70%] sm:w-[80%] rounded-l-3xl p-4 focus:outline-none bg-transparent "></input>
            <button className="w-[30%] sm:w-[20%] bg-[#fc516d] text-white ">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-wrap space-x-2 justify-center sm:flex-row w-full sm:justify-between px-2 sm:px-16">
          {links.map((link, index) => {
            return <LinkComponent key={index} link={link} />;
          })}
        </div>
      </div>
      <div className="flex flex-col pt-[60px] justify-between items-center  h-[40%]">
        <div className=" flex flex-row items-center justify-between w-[100px]">
          <img src="/insta.svg" className="size-[30px]"></img>
          <img src="/linkedin.svg" className="size-[30px]"></img>
        </div>
        <h1 className="text-[#294b8a] font-semibold text-xs sm:text-base text-center" >
          Copyright © 2020. ZealthLife technologies Pte. Ltd. All rights
          reserved.
        </h1>
      </div>
    </div>
  );
};

const LinkComponent: React.FC<{ link: string }> = ({ link }) => {
  return (
    <div className=" sm:w-[120px] sm:h-[50px] flex items-center justify-center">
      <a className="text-xs sm:text-base  text-[#294b8a] font-semibold hover:cursor-pointer hover:text-lg">
        {link}
      </a>
    </div>
  );
};
