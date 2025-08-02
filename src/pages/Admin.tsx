import { useState } from "react";
import { useProgress } from "@/contexts/ProgressContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Lock, Settings, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { progress, setProgress } = useProgress();
  const [newProgress, setNewProgress] = useState(progress);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSave = () => {
    if (newProgress < 0 || newProgress > 100) {
      toast({
        title: "Erro",
        description: "A porcentagem deve estar entre 0 e 100",
        variant: "destructive",
      });
      return;
    }

    setProgress(newProgress);
    toast({
      title: "Sucesso",
      description: `Progresso atualizado para ${newProgress}%`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <Settings className="w-5 h-5" />
              Painel Admin
            </CardTitle>
            <CardDescription className="text-gray-300">
              Controle do progresso de desenvolvimento
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">
                Progresso Atual: {progress}%
              </label>
              <Progress value={progress} className="h-3" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">
                Nova Porcentagem (0-100)
              </label>
              <Input
                type="number"
                min="0"
                max="100"
                value={newProgress}
                onChange={(e) => setNewProgress(parseInt(e.target.value) || 0)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                placeholder="Digite a porcentagem"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">
                Preview: {newProgress}%
              </label>
              <Progress value={newProgress} className="h-3" />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleSave}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>
              
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white/10"
              >
                Voltar
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            💡 Dica: Use Ctrl+Shift+A na página inicial para acesso rápido
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;