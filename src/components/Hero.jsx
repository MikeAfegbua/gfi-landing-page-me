import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import heroMockup from "../assets/images/heromockup.png";
import flagNG from "../assets/images/ngflag.png";
import flagNA from "../assets/images/naflag.png";
import flagRU from "../assets/images/ruflag.png";
import flagZA from "../assets/images/zaflag.png";
import centerPattern from "../assets/images/herobgpattern.png";
import { joinWaitlist } from "../services/waitlistService";

const Hero = () => {
  const ref = useRef(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const floatingBoxes = [
    { top: "20%", right: "5%", flag: flagNG, amount: "₦200,000" },
    { top: "55%", right: "5%", flag: flagNA, amount: "NAD 50,000" },
    { top: "50%", left: "5%", flag: flagRU, amount: "₽200,000" },
    { bottom: "10%", left: "0%", flag: flagZA, amount: "ZAR 100,000" },
  ];

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
    <section
      ref={ref}
      className="relative bg-[#FFEBC7] py-16 md:py-24 overflow-hidden"
    >
      {/* Center Background Pattern */}
      <img
        src={centerPattern}
        alt="Background pattern"
        className="absolute inset-0 m-auto opacity-100 w-[900px] h-[1000px] object-contain z-0 pointer-events-none"
        style={{ transform: "translateY(10%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-12 font-geisel z-10">
        {/* Left Side — Text + Input */}
        <div className="text-left max-w-md md:max-w-lg mx-auto md:mx-0 order-2 md:order-1">
          <h1 className="text-4xl sm:text-7xl md:text-7xl font-bold mb-4 leading-tight text-[#1C2024] text-center md:text-left">
            Seamless cross border payments
          </h1>

          <p className="text-[#000000]/80 text-sm md:text-base max-w-md mb-6 text-center md:text-left">
            A secure multi-currency wallet that lets you deposit, withdraw, and
            transfer both fiat and crypto across Africa and global markets.
          </p>

          {/* Join Waitlist Input */}
          <form
            onSubmit={handleSubmit}
            className="
              flex items-stretch
              bg-[#4F3422]
              rounded-lg sm:rounded-lg
              overflow-hidden
              w-full max-w-sm
              mx-auto md:mx-0
              transition-transform duration-300
              hover:scale-[1.02]
            "
          >
            <input
              type="email"
              name="newsletter subscription"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="
                flex-grow
                px-3 py-2
                sm:px-4 sm:py-3
                bg-[#4F3422]
                text-gray-100
                placeholder:text-gray-400
                text-xs sm:text-sm
                focus:outline-none
                disabled:opacity-50
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                bg-[#FFBA18] text-[#4F3422]
                px-2 py-3
                sm:px-6 sm:py-3
                text-xs sm:text-sm
                font-semibold
                border-2 border-[#4F3422]
                rounded-lg sm:rounded-lg
                whitespace-nowrap
                flex-shrink-0
                hover:bg-white hover:text-black
                transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {loading ? "Joining..." : "Join waitlist"}
            </button>
          </form>


          {message && (
            <p className={`text-xs mt-2 text-center md:text-left ${message.includes("added") ? "text-green-700" : "text-red-700"}`}>
              {message}
            </p>
          )}

          <p className="text-[#4F3422]/70 text-xs mt-3 text-center md:text-left">
            Launching soon in 10+ countries
          </p>
        </div>

        {/* Right Side — Image + Floating Boxes */}
        <motion.div
          style={{ scale }}
          className="relative flex justify-center md:justify-end mt-10 md:mt-0 order-1 md:order-2"
        >
          <motion.img
            src={heroMockup}
            alt="App Mockup"
            className="w-full sm:w-[70%] max-w-[400px] md:w-[420px] drop-shadow-2xl relative md:left-[10px] md:top-[86px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Floating mini boxes */}
          {floatingBoxes.map((box, index) => (
            <motion.div
              key={index}
              className="absolute bg-white shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 scale-90 sm:scale-100"
              style={{
                top: box.top,
                right: box.right,
                left: box.left,
                bottom: box.bottom,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.2,
              }}
            >
              <motion.img
                src={box.flag}
                alt="flag"
                className="w-7 h-7 rounded-full"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <div>
                <p className="text-sm font-semibold text-[#4F3422]">
                  {box.amount}
                </p>
                <p className="text-[10px] text-gray-500">Bank transfer</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
