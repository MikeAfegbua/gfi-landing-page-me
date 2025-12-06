import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

{/* Team images */ }
import productdesigner1 from "../assets/images/team/Ujah.png";
import productdesigner2 from "../assets/images/team/Abigail.png";
import graphicdesigner from "../assets/images/team/Roose.png";
import frontendengineer from "../assets/images/team/Michael.png";
import founder from "../assets/images/team/Steff.png";
import businessanalyst from "../assets/images/team/Sidiki.png";
import backenddeveloper from "../assets/images/team/Emmanuel.png";

const MeetTheTeam = () => {
  const slides = [
    { image: founder },
    { image: businessanalyst },
    { image: productdesigner1 },
    { image: graphicdesigner },
    { image: frontendengineer },
    { image: productdesigner2 },
    { image: backenddeveloper },
    
    
    
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  {/* Refs */ }
  const desktopTrackRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  {/* Desktop Autoscroll */ }
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  {/* Calculate pixel X offset for smooth transform */ }
  const getDesktopX = () => {
    const track = desktopTrackRef.current;
    if (!track) return 0;

    const slideWidth = track.children[0].offsetWidth;
    return -(activeIndex * slideWidth);
  };

  {/* Mobile Autoscroll */ }
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
          Meet the Team
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold text-[#1C2024] mt-2 mb-4 tracking-tighter">
          The people behind the product
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto">
            A creative, curious crew building things we believe in together.
          </p>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block">
        <div className="max-w-5xl mx-auto mt-12">

          {/* FIRST ROW — 4 images */}
          <div className="flex justify-center gap-6">
            {slides.slice(0, 4).map((slide, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-[270px] h-[350px] object-contain rounded-xl"
                />
                
              </div>
            ))}
          </div>

          {/* SECOND ROW — 3 images */}
          <div className="flex justify-center gap-8 mt-10">
            {slides.slice(4).map((slide, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-[270px] h-[350px] object-contain rounded-xl"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden flex flex-col items-center gap-6 mt-10">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200"
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="w-[270px] h-[350px] object-contain rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
