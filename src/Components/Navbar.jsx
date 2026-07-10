import { useRef, useState } from "react";
import { Link } from "react-router";
import { Activity, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const audioRef = useRef(new Audio("/clickEffect.mp3"));
  const PlaySound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Activity className="w-6 h-8 text-white" />
              </div>
              <span className="text-xl text-slate-900 font-semibold">
                SmartMed AI
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2 font-semibold h-full">
              <Link to="/" className="  hover:bg-blue-100  transition-bg p-3">
                Home
              </Link>
              <Link
                to="/features"
                className="  hover:bg-blue-100  transition-bg p-3"
              >
                Features
              </Link>
              <Link
                to="/about"
                className="  hover:bg-blue-100  transition-bg p-3"
              >
                About
              </Link>
              <Link
                to="/pricing"
                className="  hover:bg-blue-100  transition-bg p-3"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="  hover:bg-blue-100  transition-bg p-3"
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="  hover:bg-blue-100  transition-bg p-3"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={PlaySound}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                PlaySound();
              }}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-600" />
              ) : (
                <Menu className="w-6 h-6 text-slate-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/features"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/pricing"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/login"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="flex items-center justify-between h-18 bg-transparent">
        {" "}
      </div>
    </>
  );
};
export default Navbar;
