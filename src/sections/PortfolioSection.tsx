import { Button, Divider } from "antd";
import TiltedCard from "../components/TiltedCard/TiltedCard";

export const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Edição de Vídeo - Reel Instagram",
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      videoLink: "https://www.youtube.com/shorts/S9LTsdtCp48?feature=share",
      description: "Edição dinâmica para redes sociais",
    },
    {
      id: 2,
      title: "Motion Graphics - Animação",
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      videoLink: "https://www.youtube.com/shorts/S9LTsdtCp48?feature=share",
      description: "Animações personalizadas",
    },
    {
      id: 3,
      title: "Vídeo Corporativo - YouTube",
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      videoLink: "https://www.youtube.com/shorts/S9LTsdtCp48?feature=share",
      description: "Conteúdo profissional para empresas",
    },
    {
      id: 4,
      title: "Trailer - Produto Digital",
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      videoLink: "https://www.youtube.com/shorts/S9LTsdtCp48?feature=share",
      description: "Vídeos promocionais impactantes",
    },
    {
      id: 5,
      title: "Edição Musical - Lyric Video",
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      videoLink: "https://www.youtube.com/shorts/S9LTsdtCp48?feature=share",
      description: "Sincronização de música e visual",
    },
    {
      id: 6,
      title: "Vídeo Explicativo - Tutorial",
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      videoLink: "https://www.youtube.com/shorts/S9LTsdtCp48?feature=share",
      description: "Conteúdo educacional envolvente",
    },
  ];

  return (
    <section className="w-full min-h-[100dvh] flex flex-col items-center justify-center bg-black text-white px-4 py-16">
      <div className="text-center mb-12 max-w-4xl">
        <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white mb-4">
          Meu Portfólio
        </h1>

        <p className="font-lexant text-sm sm:text-base md:text-lg text-purple-300 mb-6">
          *Clique nos cards para assistir aos vídeos
        </p>

        <Divider className="border-purple-700 my-6" />

        <p className="font-lexant text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
          Confira alguns dos meus trabalhos mais recentes. Cada projeto é único
          e desenvolvido com{" "}
          <span className="text-purple-400 font-semibold">
            atenção aos detalhes
          </span>{" "}
          e foco no{" "}
          <span className="text-purple-400 font-semibold">resultado final</span>
          .
        </p>
      </div>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {portfolioItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <TiltedCard
                imageSrc={item.thumbnail}
                altText={item.title}
                captionText={item.title}
                containerHeight="280px"
                containerWidth="100%"
                imageHeight="280px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={false}
                videoLink={item.videoLink}
              />

              <div className="text-center mt-4 px-2">
                <h3 className="font-lexant text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="font-lexant text-sm text-white/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-lexant text-lg text-purple-300 mb-6">
            Gostou do que viu? Vamos trabalhar juntos!
          </p>
        </div>
      </div>
    </section>
  );
};
