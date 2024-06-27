import { useSetRecoilState } from "recoil";
import { Menu } from "../Menu/Menu";
import { showSideBarState } from "../../store/showSidebarState";

interface AppbarProps {
  isVisible: boolean;
}

export const Appbar: React.FC<AppbarProps> = ({ isVisible }) => {
  const setShowSidebar = useSetRecoilState(showSideBarState);


  return (
    <div
      className={`h-full custom-gradient border-b border-b-[#294b8a]  w-full flex flex-row items-center justify-between p-3 md:px-10  transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } `}
    >
      <button className=" w-[120px] sm:w-[160px] flex items-center justify-center   ">
        <img
          src="zealth-logo.svg"
          className="w-full hover:w-[95%] transition-all duration-300"
        ></img>
      </button>
      <div className="hidden lg:flex flex-row items-center">
        <Menu />
      </div>
      <div className=" flex items-center justify-center h-[100%] ">
        <button className="hidden h-full lg:block bg-[#fc516d] px-2 rounded-full text-white hover:translate-y-[-4px] transition-all duration-300 hover:bg-blue-600">
          Contact us
        </button>
      </div>
      <div
        onClick={() => {
          setShowSidebar(true);
        }}
        className="transition-all duration-300 flex items-center justify-center lg:hidden hover:bg-[#ffb7bc] hover:cursor-pointer  rounded-full p-2"
      >
        <img
          className="rounded-full size-[30px] md:size-[50px]"
          src="/hamburger.svg"
        ></img>
      </div>
    </div>
  );
};
