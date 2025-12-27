import { useEffect, useRef, useState } from "react";

// Card scroll thresholds for revealing stacked cards
const CARD_THRESHOLDS = {
  THIRD_CARD: 0.66,
  SECOND_CARD: 0.33,
} as const;

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);

  const cardStyle = {
    height: "60vh",
    maxHeight: "600px",
    borderRadius: "20px",
    transition:
      "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
    willChange: "transform, opacity",
  };

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;

          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(
              1,
              Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance)
            );
          }

          if (progress >= CARD_THRESHOLDS.THIRD_CARD) {
            setActiveCardIndex(2);
          } else if (progress >= CARD_THRESHOLDS.SECOND_CARD) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  const cardBackgrounds = [
    { gradient: "linear-gradient(135deg, #7A9B8E 0%, #6B8B7E 50%, #5A7A6D 100%)", title: "Interactive Learning", desc: "Engage with dynamic exercises designed for modern language learners" },
    { gradient: "linear-gradient(135deg, #8AAB9E 0%, #7A9B8E 50%, #6A8B7E 100%)", title: "Self-Paced Progress", desc: "Learn at your own speed with instant feedback and progress tracking" },
    { gradient: "linear-gradient(135deg, #D4A574 0%, #C4956A 50%, #B48560 100%)", title: "Comprehensive Tools", desc: "Access a complete suite of apps covering vocabulary, grammar, and conversation" }
  ];

  return (
    <div ref={sectionRef} className="relative h-[300vh]">
      <section
        className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-primary-bg"
        id="apps"
      >
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div
                className="atlas-chip opacity-0 animate-fade-in [animation-delay:0.1s]"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white mr-2 bg-primary-amber">
                  02
                </span>
                <span>Why Choose Us</span>
              </div>
            </div>

            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">
              Why Our Apps Work
            </h2>
          </div>

          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Card */}
            <div
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? "animate-card-enter" : ""}`}
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? "90px" : "200px"}) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0,
                background: cardBackgrounds[0].gradient,
              }}
            >
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Interactive</span>
                </div>
              </div>

              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight mb-4">
                    {cardBackgrounds[0].title}
                  </h3>
                  <p className="text-white/90 text-lg">{cardBackgrounds[0].desc}</p>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div
              className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? "animate-card-enter" : ""}`}
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? (activeCardIndex === 1 ? "55px" : "45px") : "200px"}) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? "auto" : "none",
                background: cardBackgrounds[1].gradient,
              }}
            >
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Self-Paced</span>
                </div>
              </div>

              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight mb-4">
                    {cardBackgrounds[1].title}
                  </h3>
                  <p className="text-white/90 text-lg">{cardBackgrounds[1].desc}</p>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div
              className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? "animate-card-enter" : ""}`}
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? (activeCardIndex === 2 ? "15px" : "0") : "200px"}) scale(1)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? "auto" : "none",
                background: cardBackgrounds[2].gradient,
              }}
            >
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Comprehensive</span>
                </div>
              </div>

              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight mb-4">
                    {cardBackgrounds[2].title}
                  </h3>
                  <p className="text-white/90 text-lg">{cardBackgrounds[2].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
