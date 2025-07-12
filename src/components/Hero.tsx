
import { Rocket, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Email cadastrado!",
        description: "Você será notificado quando o site estiver pronto.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo/Brand */}
          <div className="mb-8 flex justify-center items-center space-x-4">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
              <Code className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              GV Software
            </h1>
          </div>

          {/* Main Message */}
          <div className="mb-12 space-y-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
              Estamos em Desenvolvimento
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe está trabalhando duro para criar soluções inovadoras em software. 
              Em breve, mais novidades incríveis estarão disponíveis!
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Rocket className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Inovação</h3>
              <p className="text-gray-300">Tecnologias de ponta para soluções modernas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
              <p className="text-gray-300">Sistemas rápidos e eficientes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Code className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Qualidade</h3>
              <p className="text-gray-300">Código limpo e bem estruturado</p>
            </div>
          </div>

          {/* Email Signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Seja o primeiro a saber!
            </h3>
            <p className="text-gray-300 mb-6">
              Cadastre seu email e receba novidades sobre nossos produtos
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                required
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Notificar-me
              </Button>
            </form>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Progresso do desenvolvimento</p>
            <div className="max-w-xs mx-auto bg-gray-800 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full animate-pulse" style={{width: '75%'}}></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">75% concluído</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-bounce">
        <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce animation-delay-1000">
        <div className="w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-1/2 right-10 animate-bounce animation-delay-2000">
        <div className="w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default Hero;
