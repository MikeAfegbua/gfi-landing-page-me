import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import Logo from "../assets/images/gfilogo.png";
import FooterLogo from "../assets/images/footersecondlogo.png";
import textLogo from "../assets/images/gfilogotext.png";
import { joinWaitlist } from "../services/waitlistService";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    setLoading(true);
    setMessage("");

    const result = await joinWaitlist(email);

    if (result.success) {
      setMessage(result.message);
      setEmail("");
    } else {
      setMessage(result.message);
    }

    setLoading(false);
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <footer className="w-full bg-[#FFBA18] text-black py-14 px-6 md:px-20 font-geist">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">

        {/* LEFT SECTION */}
        <div className="w-full md:w-1/3 flex flex-col items-start text-left">
          <Link to="/" className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-4">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Main Logo" className="w-10 h-10 object-contain" />
              <img src={textLogo} alt="Logo Text" className="h-6 object-contain" />
            </div>
          </Link>

          <p className="text-xs md:text-base text-black/80 leading-relaxed mb-6 max-w-sm">
            A secure multi-currency wallet that lets you deposit, withdraw, and transfer both fiat and crypto across Africa and global markets.
          </p>

          <p className="text-xs md:text-base text-black/70">
            © Copyright 2025, All Rights Reserved
          </p>
        </div>

        {/* MIDDLE LINKS */}
        <div className="w-full md:w-auto flex flex-col text-sm gap-2 md:gap-3 text-left items-start">
          <h4 className="font-semibold mb-2 text-sm md:text-base">Quick links</h4>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-2 w-full text-xs md:text-base">
            <Link to="/privacy" className="text-[#1C2024] hover:text-[#1C2024] hover:underline transition">
              Privacy policy
            </Link>

            <Link to="/terms" className="text-[#1C2024] hover:text-[#1C2024] hover:underline transition">
              Terms of service
            </Link>

            <a
              href="mailto:dausabstephanie3@gmail.com?subject=Inquiry%20to%20GFI&body=Hello,%20I%20would%20like%20to..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C2024] hover:text-[#1C2024] hover:underline transition"
            >
              Contact us
            </a>

            <a
              href="https://chat.whatsapp.com/HjsKmLrb3bA9Y9zevC0HeT"
              target="_blank"
              className="text-[#1C2024] hover:text-[#1C2024] hover:underline transition"
            >
              WhatsApp Community
            </a>
          </div>

          <img
            src={FooterLogo}
            alt="Secondary Logo"
            className="w-[150px] h-auto object-contain mt-4 sm:mt-6"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-auto flex flex-col items-start text-left">
          <form onSubmit={handleSubmit} className="w-full">

            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="
                flex flex-row items-center 
                bg-[#4F3422] rounded-lg overflow-hidden 
                w-full max-w-sm mx-auto md:mx-0
              "
            >
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="
                  flex-grow 
                  px-3 py-2 sm:px-4 sm:py-3  
                  bg-[#4F3422] 
                  text-white 
                  placeholder-gray-300 
                  text-xs sm:text-sm  
                  focus:outline-none 
                  disabled:opacity-50
                "
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  bg-[#FFBA18] text-[#4F3422]
                  px-1 py-3           
                  sm:px-6 sm:py-3     
                  text-xs sm:text-sm  
                  font-semibold 
                  border-2 border-[#4F3422] 
                  rounded-lg
                  hover:bg-white hover:text-black 
                  transition-all duration-300 
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {loading ? "Joining..." : "Join waitlist"}
              </motion.button>
            </motion.div>

            {message && (
              <p
                className={`text-xs mt-2 ${
                  message.includes("added") ? "text-green-700" : "text-red-700"
                }`}
              >
                {message}
              </p>
            )}

          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
