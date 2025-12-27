import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

// Debounce utility for resize handler
function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const debouncedCheckMobile = debounce(checkMobile, 150);

    checkMobile();
    window.addEventListener("resize", debouncedCheckMobile);

    return () => window.removeEventListener("resize", debouncedCheckMobile);
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

  return (
    <section
      className={`overflow-hidden relative bg-primary-bg ${isMobile ? "px-3 pt-[100px] pb-10" : "px-5 pt-[120px] pb-[60px]"}`}
      id="hero"
    >
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div
              className="atlas-chip mb-3 sm:mb-6 opacity-0 animate-fade-in [animation-delay:0.1s]"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white mr-2 bg-primary-amber">
                01
              </span>
              <span>Welcome</span>
            </div>

            <h1
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in [animation-delay:0.3s]"
            >
              Master English with
              <br className="hidden sm:inline" />
              Interactive Apps
            </h1>

            <p
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in [animation-delay:0.5s] text-gray-950 font-normal text-base sm:text-lg text-left"
            >
              Explore a collection of single-file HTML web applications designed to make ESL learning engaging, interactive, and effective. Learn at your own pace with tools built for modern language learners.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in [animation-delay:0.7s]"
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
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl -z-10 shadow-xl bg-primary-border"></div>
            <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <div
                className="w-full h-auto object-cover transition-transform duration-500 ease-out flex items-center justify-center bg-primary-light min-h-[400px] p-8 [transform-style:preserve-3d]"
                ref={imageRef}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold text-primary-sage">ESL Learning Hub</h3>
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
