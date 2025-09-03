
import { Rocket, Code, Zap, MessageCircle, Instagram, Lock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useProgress } from "@/contexts/ProgressContext";
import { useNavigate } from "react-router-dom";


// GV Software Hero Component
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

          {progress < 100 && (
            <>
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
            </>
          )}

          {/* Página Principal Moderna */}
          {progress >= 100 ? (
            <div className="mt-12 max-w-6xl mx-auto animate-fade-in">
              {/* Hero Section Principal */}
              <div className="text-center mb-16 space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
                  Transformamos Ideias em 
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                    Soluções Digitais
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
                  Somos especialistas em desenvolvimento de software personalizado, aplicações web modernas e soluções tecnológicas inovadoras para seu negócio.
                </p>
              </div>

              {/* Nossos Serviços */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-cyan-700/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 animate-slide-up animation-delay-400">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float shadow-lg shadow-blue-500/30">
                      <Code className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Desenvolvimento Web</h4>
                    <p className="text-blue-200">Aplicações web responsivas e modernas com as tecnologias mais avançadas do mercado</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 via-purple-600/10 to-violet-700/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-300/50 transition-all duration-500 hover:scale-105 animate-slide-up animation-delay-600">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float animation-delay-300 shadow-lg shadow-purple-500/30">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Aplicações Móveis</h4>
                    <p className="text-purple-200">Apps nativos e híbridos para iOS e Android com performance excepcional</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 via-green-600/10 to-emerald-700/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:border-green-300/50 transition-all duration-500 hover:scale-105 animate-slide-up animation-delay-800">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float animation-delay-600 shadow-lg shadow-green-500/30">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Sistemas Customizados</h4>
                    <p className="text-green-200">Soluções sob medida para automatizar e otimizar seus processos empresariais</p>
                  </div>
                </div>
              </div>

              {/* Por que Escolher a GV Software */}
              <div className="bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/20 shadow-2xl shadow-purple-500/20 mb-16 animate-fade-in animation-delay-1000">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-bold text-white mb-4">Por que Escolher a GV Software?</h3>
                  <p className="text-xl text-gray-300">Mais de 5 anos de experiência transformando negócios através da tecnologia</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <span className="text-2xl font-bold text-white">98%</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Satisfação do Cliente</h4>
                    <p className="text-gray-300 text-sm">Projetos entregues com excelência</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse animation-delay-200">
                      <span className="text-2xl font-bold text-white">24h</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Suporte Técnico</h4>
                    <p className="text-gray-300 text-sm">Disponível sempre que precisar</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse animation-delay-400">
                      <span className="text-2xl font-bold text-white">100+</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Projetos Entregues</h4>
                    <p className="text-gray-300 text-sm">Experiência comprovada</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse animation-delay-600">
                      <span className="text-2xl font-bold text-white">5★</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Avaliação Média</h4>
                    <p className="text-gray-300 text-sm">Reconhecimento de qualidade</p>
                  </div>
                </div>
              </div>

              {/* Call to Action Final */}
              <div className="text-center bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10 animate-fade-in animation-delay-1200">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Pronto para Transformar seu Negócio?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Entre em contato conosco hoje mesmo e descubra como podemos levar sua empresa ao próximo nível com soluções tecnológicas de ponta.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    onClick={handleQuoteRequest}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Solicitar Orçamento Gratuito
                  </Button>
                  <p className="text-gray-400">ou</p>
                  <Button
                    onClick={handleInstagramClick}
                    variant="outline"
                    className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Instagram className="w-6 h-6 mr-2" />
                    Siga no Instagram
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            /* Barra de Progresso Original */
            <div className="mt-12 max-w-lg mx-auto animate-slide-up animation-delay-2000">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                    <Code className="w-6 h-6 text-blue-400 animate-pulse" />
                    Progresso do Desenvolvimento
                    <Zap className="w-6 h-6 text-purple-400 animate-pulse animation-delay-300" />
                  </h3>
                  <p className="text-gray-300">Nossa jornada de inovação em tempo real</p>
                </div>

                <div className="space-y-4">
                  {/* Counter animado */}
                  <div className="text-center">
                    <div className="inline-flex items-baseline gap-1">
                      <span className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] tabular-nums">
                        {progress}
                      </span>
                      <span className="text-3xl font-semibold text-purple-400 animate-pulse">%</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1 animate-fade-in">concluído</p>
                  </div>

                  {/* Barra de progresso ultra moderna */}
                  <div className="relative group">
                    {/* Fundo com efeito de profundidade */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80 rounded-xl backdrop-blur-sm border border-white/10"></div>
                    
                    {/* Trilha da barra */}
                    <div className="relative h-6 bg-gradient-to-r from-slate-800/90 via-slate-700/70 to-slate-800/90 rounded-xl overflow-hidden border border-white/20 shadow-inner">
                      {/* Reflexo interno */}
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      
                      {/* Barra de progresso principal */}
                      <div 
                        className="relative h-full rounded-xl transition-all duration-1000 ease-out shadow-lg overflow-hidden"
                        style={{width: `${progress}%`}}
                      >
                        {/* Gradiente base roxo e azul */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-600 via-purple-600 to-slate-900 rounded-xl"></div>
                        
                        {/* Efeito de loading animado */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-500 via-purple-500 to-slate-900 rounded-xl animate-gradient bg-[length:300%_100%] opacity-90"></div>
                        
                        {/* Flow de carregamento */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 via-purple-400 to-transparent rounded-xl animate-gradient bg-[length:200%_100%] opacity-70"></div>
                        
                        {/* Reflexo superior */}
                        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl"></div>
                        
                        {/* Shimmer de loading */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite] rounded-xl"></div>
                        
                        {/* Pulso de energia */}
                        <div className="absolute inset-0 opacity-80">
                          <div className="h-full w-full bg-gradient-to-r from-slate-800/60 via-blue-400/60 via-purple-400/60 to-slate-800/60 rounded-xl animate-pulse"></div>
                        </div>
                        
                        {/* Efeito de movimento contínuo */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/40 via-purple-300/40 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-2000 rounded-xl"></div>
                      </div>
                      
                      {/* Partículas flutuantes múltiplas */}
                      <div className="absolute top-1/2 transform -translate-y-1/2 animate-float" style={{left: `${Math.min(progress * 0.3, 95)}%`}}>
                        <div className="w-1 h-1 bg-blue-300 rounded-full animate-ping shadow-lg shadow-blue-300/50"></div>
                      </div>
                      <div className="absolute top-1/2 transform -translate-y-1/2 animate-float animation-delay-300" style={{left: `${Math.min(progress * 0.6, 95)}%`}}>
                        <div className="w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse shadow-lg shadow-purple-300/50"></div>
                      </div>
                      <div className="absolute top-1/2 transform -translate-y-1/2 animate-float animation-delay-600" style={{left: `${Math.min(progress * 0.9, 95)}%`}}>
                        <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce shadow-lg shadow-slate-300/50"></div>
                      </div>
                      
                      {/* Indicador de progresso flutuante */}
                      <div className="absolute top-1/2 transform -translate-y-1/2 animate-float animation-delay-1000" style={{left: `${Math.min(progress, 95)}%`}}>
                        <div className="relative">
                          <div className="w-2.5 h-2.5 bg-white rounded-full shadow-2xl shadow-white/50 animate-pulse border-2 border-white/50"></div>
                          <div className="absolute inset-0 w-2.5 h-2.5 bg-gradient-to-r from-cyan-200 to-pink-200 rounded-full animate-spin opacity-80"></div>
                          <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Efeitos de luz ambiente */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-70 animate-pulse"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-md animate-glow"></div>
                  </div>

                  {/* Milestones */}
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span className={progress >= 25 ? "text-blue-400 font-semibold" : ""}>25%</span>
                    <span className={progress >= 50 ? "text-purple-400 font-semibold" : ""}>50%</span>
                    <span className={progress >= 75 ? "text-pink-400 font-semibold" : ""}>75%</span>
                    <span className={progress >= 100 ? "text-green-400 font-semibold animate-bounce" : ""}>100%</span>
                  </div>

                  {/* Status message */}
                  <div className="text-center pt-2">
                    <p className="text-sm text-gray-400 animate-pulse">
                      {progress < 30 && "🚀 Iniciando a jornada..."}
                      {progress >= 30 && progress < 60 && "⚡ Desenvolvimento acelerado!"}
                      {progress >= 60 && progress < 90 && "🔥 Quase lá! Últimos ajustes..."}
                      {progress >= 90 && progress < 100 && "✨ Finalizando os detalhes..."}
                      {progress >= 100 && "🎉 Projeto concluído!"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
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
