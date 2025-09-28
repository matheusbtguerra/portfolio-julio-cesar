import { Button, Divider } from "antd";
import LiquidEther from "../components/LiquidEther";

export const HomeSection = () => {
  return (
    <section className="w-full h-[80vh] sm:h-[90vh] md:h-[100dvh] relative">
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center max-w-2xl px-4 sm:px-6 pointer-events-auto">
          <p className="font-lexant text-lg sm:text-xl md:text-2xl lg:text-5xl text-white mb-2">
            Júlio César
          </p>

          <Divider className="border-purple-700 my-3 sm:my-4" />

          <h1 className="font-bebas text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-white mb-4 sm:mb-6 leading-tight">
            Editor Profissional de Vídeo & Motion Graphics
          </h1>

          <p className="font-lexant text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
            Profissional, direto ao ponto e com foco no que você precisa!
          </p>

          <Button
            type="primary"
            size="large"
            className="rounded-sm bg-purple-700 hover:!bg-purple-600 border-none px-6 py-4 sm:px-8 sm:py-6 h-auto !font-lexant"
            style={{ fontFamily: "inherit" }}
          >
            <span className="font-lexant text-base sm:text-lg">
              Entre em contato
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
