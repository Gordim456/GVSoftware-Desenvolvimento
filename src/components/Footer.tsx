
import { Instagram } from "lucide-react";

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

          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/gv_software/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group p-4 bg-gradient-to-br from-purple-600 via-pink-500 via-red-500 to-yellow-500 rounded-2xl transition-all duration-500 hover:scale-110 animate-instagram-pulse shadow-xl hover:shadow-purple-500/50 border-2 border-white/20 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 via-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient bg-[length:300%_300%]"></span>
              <div className="relative">
                <Instagram className="w-7 h-7 text-white animate-bounce drop-shadow-lg" />
                <div className="absolute -inset-1 bg-white/30 rounded-full animate-ping"></div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
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
