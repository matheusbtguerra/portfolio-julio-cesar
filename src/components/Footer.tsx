import { Button, Divider, Input } from "antd";
import {
  PhoneOutlined,
  GlobalOutlined,
  MailOutlined,
  WhatsAppOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

export const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-black text-white px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Vamos Trabalhar Juntos!
          </h2>

          <Divider className="border-purple-700 my-6" />

          <p className="font-lexant text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Pronto para transformar suas ideias em vídeos incríveis? Entre em
            contato e vamos criar algo{" "}
            <span className="text-purple-400 font-semibold">
              extraordinário
            </span>{" "}
            juntos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="font-bebas text-2xl sm:text-3xl text-purple-300 mb-6">
              Envie uma Mensagem
            </h3>

            <div>
              <p className="font-lexant text-white mb-2">Meu nome é:</p>
              <Input
                placeholder="Digite seu nome"
                className="bg-black/40 border-purple-700/50 text-white placeholder:text-white/50 hover:border-purple-500/70 focus:border-purple-400"
              />
            </div>

            <div>
              <p className="font-lexant text-white mb-2">
                Estou interessado em:
              </p>
              <Input.TextArea
                rows={4}
                placeholder="Descreva seu projeto..."
                className="bg-black/40 border-purple-700/50 text-white placeholder:text-white/50 hover:border-purple-500/70 focus:border-purple-400"
              />
            </div>

            <Button
              type="primary"
              size="large"
              className="w-full rounded-sm bg-purple-700 hover:!bg-purple-600 border-none px-6 py-4 h-auto !font-lexant"
              style={{ fontFamily: "inherit" }}
            >
              <span className="font-lexant text-lg">Enviar Mensagem</span>
            </Button>
          </div>

          <div className="space-y-8">
            <h3 className="font-bebas text-2xl sm:text-3xl text-purple-300 mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                  <PhoneOutlined className="text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="font-lexant text-white/70 text-sm">Telefone</p>
                  <p className="font-lexant text-white text-lg">
                    +55 (51) 99717-9137
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                  <MailOutlined className="text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="font-lexant text-white/70 text-sm">E-mail</p>
                  <p className="font-lexant text-white text-lg">
                    juliostudios@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                  <GlobalOutlined className="text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="font-lexant text-white/70 text-sm">
                    Localização
                  </p>
                  <p className="font-lexant text-white text-lg">
                    Porto Alegre, RS
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="font-lexant text-white/70 text-sm mb-4">
                Siga-me nas redes:
              </p>
              <div className="flex gap-4">
                <Button
                  type="link"
                  icon={
                    <WhatsAppOutlined className="text-purple-400 text-2xl hover:text-purple-300" />
                  }
                  className="p-0 w-12 h-12 bg-purple-900/30 rounded-full hover:bg-purple-800/50 transition-colors duration-300"
                />
                <Button
                  type="link"
                  icon={
                    <InstagramOutlined className="text-purple-400 text-2xl hover:text-purple-300" />
                  }
                  className="p-0 w-12 h-12 bg-purple-900/30 rounded-full hover:bg-purple-800/50 transition-colors duration-300"
                />
                <Button
                  type="link"
                  icon={
                    <LinkedinOutlined className="text-purple-400 text-2xl hover:text-purple-300" />
                  }
                  className="p-0 w-12 h-12 bg-purple-900/30 rounded-full hover:bg-purple-800/50 transition-colors duration-300"
                />
                <Button
                  type="link"
                  icon={
                    <YoutubeOutlined className="text-purple-400 text-2xl hover:text-purple-300" />
                  }
                  className="p-0 w-12 h-12 bg-purple-900/30 rounded-full hover:bg-purple-800/50 transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <Divider className="border-purple-700/30 my-8" />

        <div className="text-center space-y-3">
          <p className="font-lexant text-white/60 text-sm">
            © 2025 Júlio César - Todos os direitos reservados
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="font-lexant text-white/40 text-xs">
              Desenvolvido por{" "}
              <span className="text-purple-400">
                Matheus Borges de Toledo Guerra
              </span>
            </p>
            <div className="flex gap-3">
              <Button
                type="link"
                href="https://www.linkedin.com/in/matheus-borges-de-toledo-guerra-2482522b3/"
                target="_blank"
                icon={
                  <LinkedinOutlined className="text-purple-400/70 text-lg hover:text-purple-300" />
                }
                className="p-0 w-8 h-8 bg-purple-900/20 rounded-full hover:bg-purple-800/30 transition-colors duration-300"
              />
              <Button
                type="link"
                href="https://github.com/matheusbtguerra"
                target="_blank"
                icon={
                  <GithubOutlined className="text-purple-400/70 text-lg hover:text-purple-300" />
                }
                className="p-0 w-8 h-8 bg-purple-900/20 rounded-full hover:bg-purple-800/30 transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
