import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

{/* Team images */}
import teamphoto from "../assets/images/team/teamcover.jpg";
import productdesigner1 from "../assets/images/team/ujah.jpg";
import productdesigner2 from "../assets/images/team/abigail.jpg";
import graphicdesigner from "../assets/images/team/roose.jpg";
import frontendengineer from "../assets/images/team/michael.jpg";
import founder from "../assets/images/team/steff.jpg";
import businessanalyst from "../assets/images/team/sidiki.jpg";
import backenddeveloper from "../assets/images/team/anthony.jpg";

const MeetTheTeam = () => {
  const slides = [
    { image: teamphoto },
    { image: founder },
    { image: businessanalyst },
    { image: frontendengineer },
    { image: backenddeveloper },
    { image: productdesigner1 },
    { image: productdesigner2 },
    { image: graphicdesigner },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  {/* Refs */}
  const desktopTrackRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  {/* Desktop Autoscroll */}
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  {/* Calculate pixel X offset for smooth transform */}
  const getDesktopX = () => {
    const track = desktopTrackRef.current;
    if (!track) return 0;

    const slideWidth = track.children[0].offsetWidth;
    return -(activeIndex * slideWidth);
  };

  {/* Mobile Autoscroll */}
  useEffect(() => {
    const scrollContainer = mobileScrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = () => {
      if (isInteractingRef.current) return;

      const itemWidth = scrollContainer.clientWidth * 0.75;
      scrollContainer.scrollBy({ left: itemWidth, behavior: "smooth" });

      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - 20
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      }
    };

    const interval = setInterval(scrollStep, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMobileTouch = () => {
    isInteractingRef.current = true;

    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 7000);
  };

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-32 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#AB6400] font-medium text-sm tracking-wide uppercase">
          Our Team
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold text-[#1C2024] mt-2 mb-4 tracking-tighter">
          Meet the Team
        </h2>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:flex justify-center">
        <div className="relative w-full max-w-6xl overflow-hidden h-[500px]">
          <motion.div
            ref={desktopTrackRef}
            className="flex gap-8"
            animate={{
              x: getDesktopX(),
              opacity: [0.4, 1],
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          >
            {slides.concat(slides).map((slide, i) => (
              <div
                key={i}
                className="min-w-[33%] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={slide.image}
                  alt="Team Member"
                  className="w-full h-[450px] object-cover rounded-2xl"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div
        ref={mobileScrollRef}
        className="md:hidden overflow-x-auto flex flex-nowrap gap-4 pr-6 mt-10 scrollbar-hide scroll-smooth"
        onTouchStart={handleMobileTouch}
        onTouchMove={handleMobileTouch}
        onTouchEnd={handleMobileTouch}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="shrink-0 w-[75vw] rounded-2xl overflow-hidden shadow-md border border-gray-200"
          >
            <img
              src={slide.image}
              alt="Team Member"
              className="w-full h-72 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
