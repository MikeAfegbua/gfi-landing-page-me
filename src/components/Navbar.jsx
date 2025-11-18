import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/gfilogo.png";
import textLogo from "../assets/images/gfilogotext.png";
import earlyaccesssvg from "../assets/images/earlyaccesssvg.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  {/* To detect scroll to adjust navbar styling */} 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFBA18]/90 shadow-md backdrop-blur-xl py-2"
          : "bg-[#FFEBC7] border-b border-gray-200 py-3"
      }`}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 w-full">
        {/* Logo */}
        <Link to="/">
          <motion.div
            className="flex items-center gap-1 cursor-pointer select-none"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain"
            />
            <img
              src={textLogo}
              alt="Logo Text"
              className="h-4 sm:h-5 md:h-6 object-contain max-w-[70px] sm:max-w-[100px]"
            />
          </motion.div>
        </Link>

        {/* Desktop Button */}
        {/*<div className="hidden sm:block">
          <motion.button
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#1C2024] text-white px-4 py-2 rounded-md font-medium text-sm md:text-base transition-all duration-300 hover:bg-black"
          >
            <span>Get Early Access</span>
            <motion.img
              src={earlyaccesssvg}
              alt="Early Access Icon"
              className="w-5 h-5"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{
                repeat: Infinity,
                repeatDelay: 3,
                duration: 1.2,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        </div> */}

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
            className="ml-1"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-[#1C2024]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1C2024]" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-[#FFEBC7] border-t border-gray-300 shadow-md px-4 py-4"
          >
            {/* <motion.button
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 bg-[#1C2024] text-white px-5 py-3 rounded-md font-medium text-sm transition-all duration-300 hover:bg-black"
            >
              <span>Get Early Access</span>
              <motion.img
                src={earlyaccesssvg}
                alt="Early Access Icon"
                className="w-5 h-5"
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 3,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              />
            </motion.button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
