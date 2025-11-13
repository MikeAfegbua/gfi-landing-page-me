import { motion } from "framer-motion";
import foregroundImg from "../assets/images/mockupimageforsecondsection.png";
import brandLogo from "../assets/images/gfilogo.png"; 
import textLogo from "../assets/images/gfilogotext.png";
import ellipse1 from "../assets/images/eclipse1intro.png";

const Intro = () => {
  return (
    <section className="bg-[#FCFCFD] py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">

        {/* Left Image */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full h-full relative flex justify-center items-center bg-[#FFEDCB] rounded-3xl overflow-hidden"
        >
          {/* Ellipse Background Image */}
          <img
            src={ellipse1}
            alt="ellipses background"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          />

          {/* Floating Phone Image (always above ellipse) */}
          <motion.img
            src={foregroundImg}
            alt="Glovest Mobile"
            className="relative z-10 w-full max-w-[400px] mx-auto mr-60"
            animate={{
              y: [200, 40, 200],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>





        {/* Right Text */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 text-center md:text-justify"
        >
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start mb-6">
            <img
              src={brandLogo}
              alt="Global Financial Investments"
              className="w-10 h-10 mr-3 object-contain"
            />
            <img src={textLogo} alt="Logo Text" className="h-4 sm:h-5 md:h-6 object-contain max-w-[70px] sm:max-w-[100px]" />
          </div>

          {/* Heading */}
          <h2 className="md:text-3xl sm:text-base font-normal text-[#1C2024] mb-5 leading-tight">
            <span className="text-[#1C2024] font-semibold ">Glovest</span>{" "}
            by Global Financial Investment
          </h2>

          {/* Paragraphs */}
          <p className="text-[#1C2024] text-sm md:text-base leading-relaxed mb-4">
            <span className="font-semibold text-[#1C2024]">Coming Soon: Glovest</span>
          </p>
          <p className="text-[#1C2024] text-sm sm:text-base leading-relaxed mb-4">
            Glovest is a next-generation financial app by <span className="font-semibold text-[#1C2024]">Global Financial Investment</span>,
            designed to simplify how poeple and businesses manage money across borders.
          </p>

          <p className="text-[#1C2024] text-sm sm:text-base leading-relaxed mb-4"> Whether you're sending funds to family,
            freelancing with global clients, or running a business that handles international payments,  
            Glovest offers a secure, all-in-one platform for both fiat and crypto transactions.
          </p>

          <p className="text-[#1C2024] text-sm sm:text-base leading-relaxed">
           With multi-currency wallets, real-time transfers, and powerful tools for global finance, Glovest is the smarter way to send, 
           recieve, and grow your money — anywhere in the world.
          </p>

          <p className="text-[#1C2024] text-sm sm:text-base leading-relaxed">
           Stay tuned — Glovest is coming soon!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
