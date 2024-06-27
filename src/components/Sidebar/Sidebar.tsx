import { useRecoilState } from "recoil";
import { showSideBarState } from "../../store/showSidebarState";

export const Sidebar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useRecoilState(showSideBarState);

  return (
    <div>
      {showSidebar && (
        <div className="fixed z-20 inset-0 bg-black opacity-30"></div>
      )}
      <div
        className={`flex flex-col overflow-hidden  z-30 transition-all duration-300 ease-in-out fixed right-0 h-full  bg-[#e7eefa]
      ${showSidebar ? "w-[300px] border-l-[3px] border-l-[#294b8a]" : "w-[0px]"}
      `}
      >
        <div className=" h-[60px] flex items-center justify-end">
          <div
            onClick={() => {
              setShowSidebar(false);
            }}
            className=" shrink-0  transition-all duration-300 hover:cursor-pointer hover:bg-[#ced6e6]  size-[50px] rounded-full p-2"
          >
            <img src="/cross.svg"></img>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-start px-4 text-[#294b8a] font-bold h-full space-y-10 ">
          <button className="hover:text-blue-600">Home</button>
          <button className="hover:text-blue-600">Patients</button>
          <button className="hover:text-blue-600">Clinicians</button>
          <button className="hover:text-blue-600">Insurance</button>
          <button className="hover:text-blue-600">Clinical Trials</button>
          <button className="hover:text-blue-600">News</button>
            <button className="bg-[#fc516d] px-2 py-4 rounded-2xl text-white hover:translate-y-[-4px] transition-all duration-300 hover:bg-blue-600">
              Contact us
            </button>
        </div>
      </div>
    </div>
  );
};
