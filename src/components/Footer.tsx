
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <span className="text-2xl font-bold">GV</span>
            </div>
            <h3 className="text-2xl font-bold">GV Software</h3>
          </div>
          
          <p className="text-gray-400 max-w-md mx-auto">
            Desenvolvendo o futuro com tecnologia e inovação
          </p>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Gvsoftware2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contato@gvsoftware.com.br" 
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/company/gvsoftware" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="tel:+5511999999999" 
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-slate-800 pt-6 mt-8">
            <p className="text-gray-500 text-sm">
              © 2025 GV Software. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
