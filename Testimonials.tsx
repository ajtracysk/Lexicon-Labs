import { useRef } from "react";

const testimonials = [
  {
    content:
      "These apps transformed my English learning journey. The interactive exercises are engaging and the progress tracking keeps me motivated. I've improved my vocabulary by 40% in just three months!",
    author: "Maria García",
    role: "Student, Spain",
    gradient: "bg-amber-gradient-1",
  },
  {
    content:
      "As a teacher, I recommend these apps to all my ESL students. They're simple to use, require no setup, and students actually enjoy using them. The self-paced nature works perfectly for mixed-ability classes.",
    author: "Prof. James Chen",
    role: "ESL Instructor, Singapore",
    gradient: "bg-amber-gradient-2",
  },
  {
    content:
      "I love that these are single-file apps. No complicated installations or subscriptions. I can use them on my phone, tablet, or computer. Perfect for learning on the go during my commute!",
    author: "Ahmed Hassan",
    role: "Working Professional, Egypt",
    gradient: "bg-sage-gradient",
  },
  {
    content:
      "The pronunciation tool has been a game-changer for me. I can finally hear myself and compare with native speakers. My confidence in speaking English has increased dramatically.",
    author: "Yuki Tanaka",
    role: "Student, Japan",
    gradient: "bg-warm-dark-1",
  },
];

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
}

const TestimonialCard = ({
  content,
  author,
  role,
  gradient,
}: TestimonialCardProps) => {
  return (
    <div
      className={`${gradient} rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>

      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="py-12 relative"
      id="testimonials"
      ref={sectionRef}
      style={{ backgroundColor: "#FAFAF8" }}
    >
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="atlas-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white mr-2" style={{ backgroundColor: "#D4A574" }}>
              04
            </span>
            <span>Testimonials</span>
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-12 text-left" style={{ color: "#1A1A18" }}>
          Loved by Learners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              gradient={testimonial.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
