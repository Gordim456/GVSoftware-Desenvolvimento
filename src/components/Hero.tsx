
import { Rocket, Code, Zap, MessageCircle, Instagram, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useProgress } from "@/contexts/ProgressContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { toast } = useToast();
  const { progress } = useProgress();
  const navigate = useNavigate();
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState("");

  // Atalho escondido: Ctrl+Shift+A
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        navigate('/admin');
        toast({
          title: "Acesso Admin",
          description: "Redirecionando para o painel administrativo...",
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, toast]);

  const handleQuoteRequest = () => {
    const whatsappNumber = "5517997853416";
    const message = "Olá! Gostaria de solicitar um orçamento para desenvolvimento de software.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/gv_software/', '_blank');
  };

  // Duplo clique na logo para acessar admin
  const handleLogoDoubleClick = () => {
    setShowPasswordDialog(true);
  };

  // Validar senha e acessar admin
  const handlePasswordSubmit = () => {
    if (password === "gvadmin2024") {
      setShowPasswordDialog(false);
      setPassword("");
      navigate('/admin');
      toast({
        title: "Acesso Autorizado",
        description: "Bem-vindo ao painel administrativo!",
      });
    } else {
      toast({
        title: "Senha Incorreta",
        description: "Tente novamente.",
        variant: "destructive",
      });
      setPassword("");
    }
  };

  const handlePasswordKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handlePasswordSubmit();
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
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 flex justify-center items-center space-x-4 animate-fade-in">
            <div 
              className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl animate-float animate-glow cursor-pointer hover:scale-105 transition-transform duration-200" 
              onDoubleClick={handleLogoDoubleClick}
              title="Duplo clique para acesso especial"
            >
              <Code className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              GV Software
            </h1>
          </div>

          {/* Main Message */}
          <div className="mb-12 space-y-6 animate-slide-up animation-delay-300">
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
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slide-up animation-delay-600">
              <Rocket className="w-12 h-12 text-blue-400 mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-semibold text-white mb-2">Inovação</h3>
              <p className="text-gray-300">Tecnologias de ponta para soluções modernas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slide-up animation-delay-900">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-float animation-delay-300" />
              <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
              <p className="text-gray-300">Sistemas rápidos e eficientes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slide-up animation-delay-1000">
              <Code className="w-12 h-12 text-pink-400 mx-auto mb-4 animate-float animation-delay-600" />
              <h3 className="text-xl font-semibold text-white mb-2">Qualidade</h3>
              <p className="text-gray-300">Código limpo e bem estruturado</p>
            </div>
          </div>

          {/* Quote Request Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20 mb-8 animate-slide-up animation-delay-1000 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Solicite seu Orçamento!
            </h3>
            <p className="text-gray-300 mb-6">
              Precisa de uma solução em software? Entre em contato conosco via WhatsApp
            </p>
            <Button
              onClick={handleQuoteRequest}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-2 animate-glow"
            >
              <MessageCircle className="w-5 h-5 animate-bounce" />
              Solicitar Orçamento
            </Button>
          </div>

          {/* Instagram Link */}
          <div className="mb-8">
            <Button
              onClick={handleInstagramClick}
              className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 via-red-500 to-yellow-500 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-500 transform hover:scale-110 animate-instagram-pulse shadow-2xl hover:shadow-purple-500/50 group border-2 border-white/20"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 via-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient bg-[length:300%_300%]"></span>
              <span className="relative flex items-center gap-4 text-lg">
                <div className="relative">
                  <Instagram className="w-7 h-7 animate-bounce drop-shadow-lg" />
                  <div className="absolute -inset-1 bg-white/30 rounded-full animate-ping"></div>
                </div>
                <span className="animate-pulse">✨ Siga-nos no Instagram ✨</span>
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 text-center animate-slide-up animation-delay-2000">
            <p className="text-gray-400 mb-4">Progresso do desenvolvimento</p>
            <div className="max-w-xs mx-auto bg-gray-800 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full animate-pulse animate-glow" style={{width: `${progress}%`}}></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">{progress}% concluído</p>
          </div>
        </div>
      </div>

      {/* Password Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent className="bg-slate-900/95 backdrop-blur-sm border-purple-500/30 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-purple-400">
              <Lock className="w-5 h-5" />
              Acesso Restrito
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <p className="text-gray-300 text-sm">
              Digite a senha para acessar o painel administrativo:
            </p>
            
            <Input
              type="password"
              placeholder="Digite a senha..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handlePasswordKeyPress}
              className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
              autoFocus
            />
            
            <div className="flex gap-2 justify-end">
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowPasswordDialog(false);
                  setPassword("");
                }}
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Cancelar
              </Button>
              <Button 
                onClick={handlePasswordSubmit}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                Entrar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-glow"></div>
      </div>
      <div className="absolute bottom-20 right-20 animate-float animation-delay-1000">
        <div className="w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-glow"></div>
      </div>
      <div className="absolute top-1/2 right-10 animate-float animation-delay-2000">
        <div className="w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-glow"></div>
      </div>
      <div className="absolute top-1/3 left-10 animate-float animation-delay-600">
        <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-50 animate-glow"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float animation-delay-900">
        <div className="w-5 h-5 bg-cyan-400 rounded-full opacity-40 animate-glow"></div>
      </div>
    </div>
  );
};

export default Hero;
