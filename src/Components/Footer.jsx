import { Link } from "react-router-dom";
import { Activity } from "lucide-react";
import { useRef, useState } from "react";

const Footer = () => {
  const [value,setValue]=useState("");

const audioRef = useRef(new Audio("/clickEffect.mp3"));
  const PlaySound = () => {
    if(!value) return 
    audioRef.current.currentTime = 0; // rewind to start
    audioRef.current.play();
    setValue("")
  };

  return (
    <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">

          {/* Brand */}
          <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-lg font-semibold tracking-tight">
                SmartMed <span className="text-cyan-400">AI</span>
              </span>
            </div>

            {/* Divider */}
            <div className="w-full max-w-52 h-px mt-8 bg-gradient-to-r from-slate-900 via-white/20 to-slate-900" />

            <p className="text-sm text-white/50 mt-6 max-w-sm leading-relaxed">
              Your intelligent health companion for better medication management
              and wellness tracking.
            </p>
          </div>

          {/* Product Links */}
          <div className="w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-white font-medium">Product</h3>
            <div className="flex flex-col gap-2 mt-6">
              <Link to="/features" className="text-sm text-white/50 hover:text-white transition-colors">Features</Link>
              <Link to="/pricing"  className="text-sm text-white/50 hover:text-white transition-colors">Pricing</Link>
              <Link to="/"    className="text-sm text-white/50 hover:text-white transition-colors">Documents</Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-white font-medium">Company</h3>
            <div className="flex flex-col gap-2 mt-6">
              <Link to="/about"   className="text-sm text-white/50 hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm text-white/50 hover:text-white transition-colors">Contact</Link>
              <a href="#"          className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* Subscribe */}
          <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-white font-medium">Subscribe for news</h3>
            <div className="flex items-center border gap-2 border-white/20 h-13 max-w-80 w-full rounded-full overflow-hidden mt-4">
              <input
                type="email"
                value={value}    
                onChange={(e)=>setValue(e.target.value)}
                placeholder="Enter your email.."
                className="w-full h-full pl-5 outline-none text-sm bg-transparent text-white placeholder-white/40 placeholder:text-xs"
              />
              
              <button className="bg-gradient-to-b from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 active:scale-95 transition md:w-25 w-20 h-10 rounded-full text-xs text-white cursor-pointer mr-1.5 shrink-0" onClick={PlaySound}>
                Subscribe
              </button>
            </div>

        
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px mt-16 mb-4 bg-gradient-to-r from-slate-900 via-white/20 to-slate-900" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SmartMed AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">Terms & Conditions</a>
            <div className="w-px h-4 bg-white/20" />
            <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;