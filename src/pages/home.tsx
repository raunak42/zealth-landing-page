import { Appbar } from "../components/Appbar/Appbar";
import { useEffect, useRef, useState } from "react";
import { FoundersMsg } from "../components/FoundersMsg/FoundersMsg";
import { Cards } from "../components/Cards/Cards";
import { Footer } from "../components/Footer/Footer";
import { Partners } from "../components/Partners/Partners";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { InViewWrapper } from "../hooks/useInView";
import { useMediaQuery } from "react-responsive";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useRecoilState } from "recoil";
import { showAppbarState } from "../store/showAppbarState";

export const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [showAppbar, setShowAppbar] = useRecoilState(showAppbarState);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);

  let lastScrollY = 0;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowAppbar(true);

        console.log("Started scrolling up!");
      }
      if (currentScrollY > lastScrollY) {
        setShowAppbar(false);
        console.log("Started scrolling down!");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const isSmScreen = useMediaQuery({ minWidth: 640 }); //lg breakpoint

  return (
    <div className="">
      <Sidebar />

      <div className=" relative h-[93vh] sm:h-[100vh]">
        <div
          className={`h-[60px] sm:h-[70px]  transition-all duration-500 overflow-hidden z-10 fixed  w-full  ${
            showAppbar ? "" : "translate-y-[-100px]"
          }`}
        >
          <Appbar isVisible={isVisible} />
        </div>
        <div className="z-0 absolute inset-0 flex flex-row items-center text-center  justify-center p-12 mt-14">
          <h1
            className={` text-6xl md:text-8xl text-[#294b8a] font-semibold transition-all  duration-700 ${
              isVisible ? "transform -translate-y-8" : ""
            } ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            End to end remote monitoring for cancer patients.
          </h1>
        </div>
      </div>
      {isSmScreen ? (
        <InViewWrapper>
          <div ref={ref} className={`flex flex-col gap-12`}>
            <FoundersMsg />
            <Cards />
          </div>
        </InViewWrapper>
      ) : (
        <div ref={ref} className={`flex flex-col gap-12`}>
          <FoundersMsg />
          <Cards />
        </div>
      )}

      <InViewWrapper>
        <Testimonials />
      </InViewWrapper>
      <InViewWrapper>
        <Partners />
        <Footer />
      </InViewWrapper>
    </div>
  );
};
