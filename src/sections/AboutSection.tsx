import { Divider } from "antd";
import {
  CheckCircleOutlined,
  EditOutlined,
  PlayCircleOutlined,
  BulbOutlined,
} from "@ant-design/icons";

export const AboutSection = () => {
  const services = [
    {
      icon: <PlayCircleOutlined className="text-purple-400 text-2xl" />,
      title: "Edição de Vídeos para Redes Sociais",
      description:
        "Conteúdo vertical otimizado para Instagram, TikTok e YouTube Shorts que engaja e converte.",
    },
    {
      icon: <EditOutlined className="text-purple-400 text-2xl" />,
      title: "Edição de Vídeos Longos",
      description:
        "Vídeos para YouTube, cursos online e apresentações com narrativa envolvente e ritmo profissional.",
    },
    {
      icon: <BulbOutlined className="text-purple-400 text-2xl" />,
      title: "Motion Graphics & Efeitos Visuais",
      description:
        "Animações personalizadas, transições suaves e efeitos que elevam a qualidade visual do seu conteúdo.",
    },
    {
      icon: <CheckCircleOutlined className="text-purple-400 text-2xl" />,
      title: "Consultoria em Estratégia de Conteúdo",
      description:
        "Orientação completa para criar vídeos que geram resultados e fortalecem sua marca no digital.",
    },
  ];

  return (
    <section className="w-full min-h-[100dvh] flex flex-col items-center justify-center bg-black text-white px-4 py-16">
      <div className="text-center mb-12 max-w-4xl">
        <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white mb-6">
          Sobre Mim
        </h1>

        <Divider className="border-purple-700 my-6" />

        <p className="font-lexant text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
          Bem-vindo ao meu portfólio! Sou{" "}
          <span className="text-purple-400 font-semibold">Júlio César</span>, um
          editor profissional de vídeo e motion graphics com foco em transformar
          ideias em
          <span className="text-purple-400 font-semibold">
            {" "}
            vídeos impactantes
          </span>{" "}
          que contam histórias e engajam o público.
        </p>
      </div>

      <div className="w-full max-w-6xl">
        <h2 className="font-bebas text-2xl sm:text-3xl md:text-4xl text-center mb-8 text-purple-300">
          Meus Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-purple-700/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 hover:bg-black/60 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center group-hover:bg-purple-800/70 transition-colors duration-300">
                  {service.icon}
                </div>

                <div className="flex-1">
                  <h3 className="font-lexant text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="font-lexant text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="font-lexant text-lg text-purple-300 mb-4">
          Pronto para elevar o seu conteúdo?
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};
