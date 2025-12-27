import { Clock } from "lucide-react";

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-0 bg-primary-bg">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="atlas-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white mr-2 bg-primary-amber">
              05
            </span>
            <span>Newsletter</span>
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-4 text-left text-primary-text">
          Stay Updated
        </h2>
        <p className="text-xl mb-8 text-left text-gray-500">
          Get notified when new apps are released and receive exclusive learning tips delivered to your inbox.
        </p>

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-primary-amber">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
