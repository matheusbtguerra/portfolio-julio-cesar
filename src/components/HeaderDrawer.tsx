import { useState } from "react";
import { Button } from "antd";
import {
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  CloseOutlined,
} from "@ant-design/icons";

interface HeaderDrawerProps {
  setIsDrawerOpen: (open: boolean) => void;
}

export const HeaderDrawer = ({ setIsDrawerOpen }: HeaderDrawerProps) => {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsDrawerOpen(false);
    }, 300);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex"
      style={{ zIndex: 10000 }}
      onClick={handleClose}
    >
      <div
        className={`bg-black w-[70%] max-w-[220px] h-full p-6 flex flex-col gap-8 ml-auto
          ${isLeaving ? "animate-slide-out-right" : "animate-slide-in-right"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          type="link"
          icon={<CloseOutlined className="text-white text-2xl" />}
          className="self-end mb-4"
          onClick={handleClose}
          aria-label="Fechar menu"
        />
        <p
          className="font-lexant text-xl text-white cursor-pointer hover:text-purple-700 transition"
          onClick={() => scrollToSection("home")}
        >
          Home
        </p>
        <p
          className="font-lexant text-xl text-white cursor-pointer hover:text-purple-700 transition"
          onClick={() => scrollToSection("about")}
        >
          Sobre mim
        </p>
        <p
          className="font-lexant text-xl text-white cursor-pointer hover:text-purple-700 transition"
          onClick={() => scrollToSection("portfolio")}
        >
          Portfólio
        </p>
        <p
          className="font-lexant text-xl text-white cursor-pointer hover:text-purple-700 transition"
          onClick={() => scrollToSection("contact")}
        >
          Contato
        </p>
        <div className="flex gap-3 mt-6">
          <InstagramOutlined className="text-white text-2xl hover:text-purple-700 cursor-pointer" />
          <LinkedinOutlined className="text-white text-2xl hover:text-purple-700 cursor-pointer" />
          <YoutubeOutlined className="text-white text-2xl hover:text-purple-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
