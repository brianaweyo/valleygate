import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="top" className="relative bg-[#4B5563] text-white py-32 px-4">
        <div className="container mx-auto text-center"> 
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Pioneering consultancy solutions with innovation and integrity
          </p>
        </div>
      </section>

      {/* Navigation Anchor Links */}
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-6 md:space-x-8 justify-center md:justify-start">
            <Link href="#mission" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
              Our Mission
            </Link>
            <Link href="#team" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
              Our Team
            </Link>
            <Link href="#history" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
              History
            </Link>
            <Link href="#values" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
              Values
            </Link>
            <Link href="#careers" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To transform businesses through innovative consultancy solutions that drive sustainable growth and create lasting impact.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span className="text-gray-700">Deliver exceptional value to our clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span className="text-gray-700">Foster innovation in every engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span className="text-gray-700">Maintain the highest ethical standards</span>
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 relative rounded-xl h-64 md:h-96 w-full shadow-lg overflow-hidden mt-6 md:mt-0">
                
                <div className="absolute inset-0 bg-gray-800 opacity-90">
                
                  <img
                      src="/images/buildings.jpg"
                      alt="Team collaborating on projects"
                      className="h-full w-full object-cover object-left md:object-center"
                    />
                </div>
              
              {/* Overlay content - Responsive adjustments */}
              <div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-8 text-white ">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:space-y-6">
                  {/* Metric 1 - Adjusts to 2 columns on mobile */}
                  <div className="text-center md:text-left">
                    <p className="text-3xl sm:text-4xl font-bold mb-1 md:mb-2">100+</p>
                    <p className="text-sm sm:text-base">Businesses transformed</p>
                  </div>
                  
                  {/* Metric 2 */}
                  <div className="text-center md:text-left">
                    <p className="text-3xl sm:text-4xl font-bold mb-1 md:mb-2">15+</p>
                    <p className="text-sm sm:text-base">Years fulfilling our mission</p>
                  </div>
                  
                  {/* Metric 3 - Full width on mobile */}
                  <div className="col-span-2 md:col-span-1 text-center md:text-left">
                    <p className="text-3xl sm:text-4xl font-bold mb-1 md:mb-2">100%</p>
                    <p className="text-sm sm:text-base">Commitment to our values</p>
                  </div>
                </div>
              </div>
           </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 w-full"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">Team Member {item}</h3>
                  <p className="text-blue-600 mb-4">Position Title</p>
                  <p className="text-gray-600">Short bio highlighting expertise and experience in the industry.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Journey</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="border-l-2 border-blue-500 pl-8 space-y-12">
              {[
                { year: "2010", title: "Company Founded", description: "Started as a small consultancy firm with 5 employees" },
                { year: "2014", title: "First Major Client", description: "Secured partnership with Fortune 500 company" },
                { year: "2018", title: "Global Expansion", description: "Opened offices in 3 new countries" },
                { year: "2022", title: "Industry Recognition", description: "Named Top Consultancy Firm by Industry Magazine" },
                { year: "2023", title: "Digital Transformation", description: "Launched AI-powered consultancy platform" },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-11 top-1 h-6 w-6 rounded-full bg-[#4B5563] border-4 border-white"></div>
                  <h3 className="text-xl font-bold text-gray-800">{item.year} - {item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", icon: "🤝", description: "We uphold the highest ethical standards in all our dealings" },
              { title: "Innovation", icon: "💡", description: "Continuous improvement drives our solutions" },
              { title: "Excellence", icon: "🏆", description: "We deliver nothing but the best quality service" },
              { title: "Collaboration", icon: "👥", description: "Teamwork is at the heart of our success" },
              { title: "Accountability", icon: "🔍", description: "We take ownership of our commitments" },
              { title: "Sustainability", icon: "🌱", description: "Our solutions promote long-term viability" },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 px-4 bg-[#E5E7EB] text-gray">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { title: "Competitive Salaries", description: "We offer industry-leading compensation packages" },
              { title: "Flexible Work", description: "Hybrid and remote work options available" },
              { title: "Learning Culture", description: "Continuous professional development opportunities" },
              { title: "Great Benefits", description: "Comprehensive health and wellness programs" },
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
}