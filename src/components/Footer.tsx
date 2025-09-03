
import { Instagram, Code, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950/50 to-slate-900 border-t border-purple-500/20">
      {/* Efeito de partículas de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center space-y-12">
          {/* Logo e Nome Principal */}
          <div className="space-y-6">
            <div className="flex justify-center items-center space-x-6">
              {/* Nova Logo 3D no Footer */}
              <div className="relative group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center animate-float shadow-2xl shadow-blue-500/30 group-hover:shadow-cyan-500/50 transition-all duration-500">
                  <Code className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Anel de luz */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl animate-pulse group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  GV Software
                </h3>
                <div className="flex items-center justify-center gap-2 text-purple-300">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="text-sm font-medium">Inovação & Tecnologia</span>
                  <Sparkles className="w-4 h-4 animate-pulse animation-delay-500" />
                </div>
              </div>
            </div>
            
            {/* Slogan Moderno */}
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transformando ideias em <span className="text-cyan-400 font-semibold">soluções digitais</span> que impulsionam o futuro
            </p>
          </div>

          {/* Seção de Redes Sociais */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
              Conecte-se conosco
            </h4>
            
            <div className="flex justify-center">
              <a 
                href="https://www.instagram.com/gv_software/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-6 bg-gradient-to-br from-purple-600 via-pink-500 via-red-500 to-yellow-500 rounded-3xl transition-all duration-700 hover:scale-110 shadow-2xl hover:shadow-purple-500/50 border-2 border-white/20 overflow-hidden"
              >
                {/* Efeito de shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 via-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-gradient bg-[length:300%_300%]"></div>
                
                {/* Conteúdo do botão */}
                <div className="relative flex items-center gap-4">
                  <div className="relative">
                    <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
                    <div className="absolute -inset-2 bg-white/20 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-white font-bold text-lg">@gv_software</span>
                </div>
                
                {/* Efeito de brilho deslizante */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </a>
            </div>
          </div>

          {/* Separador Elegante */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 px-6">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Copyright Moderno */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-slate-800/50 via-purple-900/30 to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-gray-300 text-sm font-medium">
                    © 2025 <span className="text-cyan-400 font-semibold">GV Software</span> - Todos os direitos reservados
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <span>Desenvolvido com</span>
                  <Heart className="w-3 h-3 text-pink-400 animate-pulse" />
                  <span>e muito</span>
                  <Code className="w-3 h-3 text-cyan-400" />
                </div>
              </div>
            </div>
            
            {/* Mensagem especial */}
            <p className="text-gray-500 text-xs italic">
              "O futuro é construído linha por linha, função por função." ✨
            </p>
          </div>
        </div>
      </div>
      
      {/* Efeito de borda inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 animate-gradient bg-[length:300%_100%]"></div>
    </footer>
  );
};

export default Footer;
