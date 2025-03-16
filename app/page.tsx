export default function Home() {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section id="hero"
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-image.jpeg')",
        }}
        >

        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-opacity-100"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transforming Businesses with Expert Consultancy
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              We help businesses achieve growth, efficiency, and innovation.
            </p>
            <button className="bg-vibrant-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id ="about-us" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>
          <p className="text-gray-600 text-lg">
            With over 20 years of experience, we specialize in providing tailored
            consultancy solutions to help businesses thrive in a competitive
            landscape. Our team of experts is dedicated to delivering results
            that matter.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-vibrant-red p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-4">
                Business Strategy
              </h3>
              <p className="text-white">
                We help you develop a winning strategy to achieve your business
                goals.
              </p>
            </div>

            <div className="bg-vibrant-red p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-4">
                Digital Transformation
              </h3>
              <p className="text-white">
                Leverage technology to streamline operations and drive growth.
              </p>
            </div>

            <div className="bg-vibrant-red p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-4">
                Financial Consulting
              </h3>
              <p className="text-white">
                Optimize your financial performance with expert advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Increased Revenue by 30%
              </h3>
              <p className="text-gray-600">
                We helped a retail client streamline operations and boost revenue.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reduced Costs by 20%
              </h3>
              <p className="text-gray-600">
                A manufacturing client saved millions through our cost-cutting
                strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-aqua-mint py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Trusted By
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <img src="/client1-logo.png" alt="Client 1" className="h-12" />
            <img src="/client2-logo.png" alt="Client 2" className="h-12" />
            <img src="/client3-logo.png" alt="Client 3" className="h-12" />
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section id="why-choose-us" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tailored Solutions
              </h3>
              <p className="text-gray-600">
                We customize our approach to meet your unique needs.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Proven Methodologies
              </h3>
              <p className="text-gray-600">
                Our strategies are backed by years of success.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Dedicated Support
              </h3>
              <p className="text-gray-600">
                We’re with you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="tstimonials" className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "Their expertise helped us transform our business. Highly
                recommend!"
              </p>
              <p className="text-gray-900 font-semibold mt-4">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "A game-changer for our company. The results speak for
                themselves."
              </p>
              <p className="text-gray-900 font-semibold mt-4">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
