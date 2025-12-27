import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { BookOpen, Mic, Zap, Users, Target, Clock } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:shadow-lg",
        "transition-all duration-300"
      )}
      style={{ 
        animationDelay: `${0.1 * index}s`,
        backgroundColor: "#FFFFFF",
        borderColor: "#E8D4C0"
      }}
    >
      <div className="rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-5" style={{ backgroundColor: "#F5E6D3", color: "#D4A574" }}>
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: "#1A1A18" }}>{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 pb-0 relative"
      id="features"
      ref={sectionRef}
      style={{ backgroundColor: "#FAFAF8" }}
    >
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="atlas-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white mr-2" style={{ backgroundColor: "#D4A574" }}>
              03
            </span>
            <span>Features</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Powerful Tools for
            <br className="hidden sm:block" />
            Language Learning
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Each app is designed with learners in mind, combining proven language learning techniques with modern interactive design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Vocabulary Builder"
            description="Expand your English vocabulary with interactive flashcards, spaced repetition, and contextual learning exercises."
            index={0}
          />
          <FeatureCard
            icon={<Mic className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Pronunciation Guide"
            description="Perfect your pronunciation with audio examples, real-time feedback, and side-by-side comparisons."
            index={1}
          />
          <FeatureCard
            icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Quick Lessons"
            description="Learn grammar rules and language concepts in bite-sized lessons you can complete in just 5-10 minutes."
            index={2}
          />
          <FeatureCard
            icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Conversation Practice"
            description="Engage in realistic dialogue scenarios and practice common phrases used in everyday English conversations."
            index={3}
          />
          <FeatureCard
            icon={<Target className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Personalized Goals"
            description="Set learning objectives and track your progress with detailed analytics and achievement milestones."
            index={4}
          />
          <FeatureCard
            icon={<Clock className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Anytime, Anywhere"
            description="Single-file HTML apps work offline and on any device. No installation, no accounts, just pure learning."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
