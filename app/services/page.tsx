import Image from "next/image";

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Expertise, Your Success
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in delivering tailored solutions that drive growth, innovation, and long-term success. Explore how we can transform your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Business Strategy */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/hero-image.jpeg"
              alt="Business Strategy"
              width={400}
              height={250}
              layout="responsive"
              className="object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Business Strategy
              </h2>
              <p className="text-gray-600">
                Crafting winning strategies to help your business grow, innovate, and outperform the competition. Let us help you define your vision and achieve your goals.
              </p>
              <a
                href="/services#strategy"
                className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Management Consulting */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/hero-image.jpeg"
              alt="Management Consulting"
              width={400}
              height={250}
              layout="responsive"
              className="object-cover"
              />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Management Consulting
              </h2>
              <p className="text-gray-600">
                Optimize your operations, streamline processes, and enhance organizational efficiency with our expert management consulting services.
              </p>
              <a
                href="/services#consulting"
                className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Financial Advisory */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/hero-image.jpeg"
              alt="Financial Advisory"
              width={400}
              height={250}
              layout="responsive"
              className="object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Financial Advisory
              </h2>
              <p className="text-gray-600">
                Navigate complex financial landscapes with confidence. Our advisors provide tailored solutions to maximize your financial performance and sustainability.
              </p>
              <a
                href="/services#finance"
                className="mt-4 inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Marketing & Branding */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/hero-image.jpeg"
              alt="Marketing & Branding"
              width={400}
              height={250}
              layout="responsive"
              className="object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Marketing & Branding
              </h2>
              <p className="text-gray-600">
                Build a powerful brand and reach your target audience with innovative marketing strategies that deliver measurable results.
              </p>
              <a
                href="/services#marketing"
                className="mt-4 inline-block px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Technology Consulting */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/hero-image.jpeg"
              alt="Technology Consulting"
              width={400}
              height={250}
              layout="responsive"
              className="object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Technology Consulting
              </h2>
              <p className="text-gray-600">
                Leverage cutting-edge technology to drive innovation, improve efficiency, and stay ahead in the digital age. We’ll help you transform your business with the right tech solutions.
              </p>
              <a
                href="/services#technology"
                className="mt-4 inline-block px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
