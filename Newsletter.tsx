const Newsletter = () => {
  return (
    <section id="newsletter" className="py-0" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="atlas-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white mr-2" style={{ backgroundColor: "#D4A574" }}>
              05
            </span>
            <span>Newsletter</span>
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-4 text-left" style={{ color: "#1A1A18" }}>
          Stay Updated
        </h2>
        <p className="text-xl mb-8 text-left" style={{ color: "#6B7280" }}>
          Get notified when new apps are released and receive exclusive learning tips delivered to your inbox.
        </p>

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white" style={{ backgroundColor: "#D4A574" }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
            <span className="font-medium">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
