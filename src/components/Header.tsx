import { useEffect, useState } from "react";
import {
  InstagramOutlined,
  LinkedinOutlined,
  MenuOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { HeaderDrawer } from "./HeaderDrawer";

export function Header() {
  const [isHeaderMinimized, setIsHeaderMinimized] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsHeaderMinimized(true);
      } else {
        setIsHeaderMinimized(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 w-full flex items-center justify-center px-6 transition-all duration-500
          ${
            isHeaderMinimized
              ? "h-[6dvh] bg-transparent py-1"
              : "h-[10dvh] bg-black/65 backdrop-blur-md py-4"
          }
        `}
        style={{ zIndex: 9999 }} 
      >
        <div
          className={`flex min-w-fit w-full lg:w-[70%] justify-between items-center gap-20`}
        >
          <div className="flex">
            <p
              className={`font-bebas transition-all duration-500 cursor-pointer ${
                isHeaderMinimized
                  ? "text-lg lg:text-2xl"
                  : "text-2xl lg:text-4xl"
              }`}
              onClick={() => scrollToSection("home")}
            >
              JC Studio
            </p>
          </div>

          <Button
            className="lg:hidden text-2xl"
            type="link"
            icon={<MenuOutlined className="text-white" />}
            onClick={toggleDrawer}
          />

          <div
            className={`justify-between items-center gap-10 hidden lg:flex transition-all duration-500`}
          >
            <p
              className={`font-lexant transition-all duration-500 cursor-pointer ${
                isHeaderMinimized ? "text-lg" : "text-2xl"
              } hover:text-purple-700`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </p>
            <p
              className={`font-lexant transition-all duration-500 cursor-pointer ${
                isHeaderMinimized ? "text-lg" : "text-2xl"
              } hover:text-purple-700`}
              onClick={() => scrollToSection("about")}
            >
              Sobre mim
            </p>
            <p
              className={`font-lexant transition-all duration-500 cursor-pointer ${
                isHeaderMinimized ? "text-lg" : "text-2xl"
              } hover:text-purple-700`}
              onClick={() => scrollToSection("portfolio")}
            >
              Portfólio
            </p>
            <p
              className={`font-lexant transition-all duration-500 cursor-pointer ${
                isHeaderMinimized ? "text-lg" : "text-2xl"
              } hover:text-purple-700`}
              onClick={() => scrollToSection("contact")}
            >
              Contato
            </p>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              type="link"
              className="text-2xl"
              icon={
                <InstagramOutlined className="text-white hover:text-purple-700 transition-all duration-300 cursor-pointer" />
              }
            />
            <Button
              type="link"
              className="text-2xl"
              icon={
                <LinkedinOutlined className="text-white hover:text-purple-700 transition-all duration-300 cursor-pointer" />
              }
            />
            <Button
              type="link"
              className="text-2xl"
              icon={
                <YoutubeOutlined className="text-white hover:text-purple-700 transition-all duration-300 cursor-pointer" />
              }
            />
          </div>
        </div>
      </header>

      {isDrawerOpen && <HeaderDrawer setIsDrawerOpen={setIsDrawerOpen} />}
    </>
  );
}
