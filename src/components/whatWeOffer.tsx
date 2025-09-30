
export const WhatWeOffer = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-24">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            What We Offer
          </h2>
          <p className="text-gray-600 text-lg">
            Learn from engineers and recruiters from FAANG, Palantir, Citadel, and OpenAI
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left Column */}
          <div className="flex flex-col gap-4">

            {/* Card 1 */}
            <div className="relative overflow-hidden bg-gradient-to-r from-purple-400 to-purple-300 text-white rounded-3xl p-8 flex flex-col justify-between h-full w-full">
              {/* Decorative Background Circles */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Industrial Experts</h3>
                <p className="text-base leading-relaxed mb-6">
                  AI-powered voice and text agents handle customer inquiries, confirm appointments, and respond via WhatsApp—all with natural, human-like conversations.
                </p>
              </div>
              <button className="relative z-10 self-start px-5 py-2 border border-white rounded-full text-sm font-semibold hover:bg-white hover:text-purple-500 transition">
                Contact Sales
              </button>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden bg-gradient-to-r from-teal-300 to-teal-400 text-white rounded-3xl p-8 flex flex-col justify-between h-full w-full">
              {/* Decorative Background Circles */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Lead Instructors</h3>
                <p className="text-base leading-relaxed mb-6">
                  Need help with automation? Our experts guide businesses in integrating AI solutions to improve operations and efficiency.
                </p>
              </div>
              <button className="relative z-10 self-start px-5 py-2 border border-white rounded-full text-sm font-semibold hover:bg-white hover:text-teal-500 transition">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">

            {/* Card 3 */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-3xl p-8 flex flex-col justify-between h-full max-w-lg w-full self-start">
              {/* Decorative Background Circles */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Advance LMS System</h3>
                <p className="text-base leading-relaxed mb-6">
                  Say goodbye to manual admin tasks! Our automation solutions help you categorize and prioritize emails, schedule social media posts, and personalize customer outreach.
                </p>
              </div>
              <button className="relative z-10 self-start px-5 py-2 border border-white rounded-full text-sm font-semibold hover:bg-white hover:text-blue-600 transition">
                Contact Sales
              </button>
            </div>

            {/* Card 4 */}
            <div className="relative overflow-hidden bg-gray-700 text-white rounded-3xl p-8 flex items-center justify-center h-40 max-w-lg w-full self-start">
              {/* Decorative Background Circles */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>

              <h3 className="relative z-10 text-xl font-bold uppercase text-center">
                Discover More <br /> Services
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
