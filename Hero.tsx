import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;

      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || "0.1");
        const yPos = -scrollY * speed;
        element.style.setProperty("--parallax-y", `${yPos}px`);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section
      className="overflow-hidden relative"
      id="hero"
      style={{
        padding: isMobile ? "100px 12px 40px" : "120px 20px 60px",
        backgroundColor: "#FAFAF8",
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div
              className="atlas-chip mb-3 sm:mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white mr-2" style={{ backgroundColor: "#D4A574" }}>
                01
              </span>
              <span>Welcome</span>
            </div>

            <h1
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Master English with
              <br className="hidden sm:inline" />
              Interactive Apps
            </h1>

            <p
              style={{ animationDelay: "0.5s" }}
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-base sm:text-lg text-left"
            >
              Explore a collection of single-file HTML web applications designed to make ESL learning engaging, interactive, and effective. Learn at your own pace with tools built for modern language learners.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <a
                href="#apps"
                className="button-primary group flex items-center justify-center w-full sm:w-auto text-center"
              >
                Explore Apps
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl -z-10 shadow-xl" style={{ backgroundColor: "#E8D4C0" }}></div>
            <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <div
                className="w-full h-auto object-cover transition-transform duration-500 ease-out flex items-center justify-center"
                style={{ 
                  transformStyle: "preserve-3d",
                  backgroundColor: "#F5E6D3",
                  minHeight: "400px",
                  padding: "2rem"
                }}
                ref={imageRef}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold" style={{ color: "#7A9B8E" }}>ESL Learning Hub</h3>
                  <p className="text-gray-600 mt-2">Interactive English Learning Tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
