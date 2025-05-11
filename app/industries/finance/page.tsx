import Image from 'next/image';

export const metadata = {
  title: 'Finance & Banking Consulting | ValleyGate Consulting',
  description:
    'Discover how ValleyGate Consulting empowers finance and banking organizations through innovation, automation, and strategic transformation.',
};

export default function FinanceBankingPage() {
  return (
    <main className="text-gray-900">
      {/* Hero with background video */}

      <section className="relative h-[50vh] md:h-[80vh] w-full overflow-hidden">
  {/* Video Background */}
  <div className="absolute inset-0 z-0">
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    
    >
      <source src="/videos/financehero.mp4" type="video/mp4"/>
      <img
        alt="Finance background"
        className="w-full h-full object-cover"
      />
    </video>
  </div>

  {/* Content Overlay */}
  <div className="absolute inset-0 z-20 flex items-center justify-center md:justify-start px-4 md:px-12">
    <div className="text-white text-center md:text-left max-w-3xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
        Finance & Banking Transformation
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl">
        Guiding financial institutions into the future
      </p>
    </div>
  </div>
</section>




        {/* Value Proposition Section */}

      <section className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Your Digital Evolution Partner</h2>
            <p className="text-gray-700 leading-relaxed">
              At ValleyGate, we don’t just advise — we empower. From core banking modernization to AI-driven insights,
              we embed agility, security, and innovation deep into your infrastructure.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Modernize legacy systems without disruption</li>
              <li>Integrate secure, scalable cloud architectures</li>
              <li>Drive data-driven decision-making</li>
              <li>Navigate compliance with built-in automation</li>
            </ul>
          </div>

          <div className="w-full h-80 relative rounded-xl overflow-hidden">
            <Image
              src="/images/expertteam.jpg"
              alt="Your finance team at work"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </section>


        {/* Strategic Impact Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Redefining the Future of Finance</h2>
              <p className="text-gray-600 max-w-4xl mx-auto">
                Whether you’re a legacy institution or a fintech disruptor, our methodologies are engineered for
                measurable outcomes. Partner with us to unlock operational excellence and long-term resilience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Intelligent Automation',
                  text: 'Automate routine operations to reduce cost and risk while improving speed and compliance.',
                },
                {
                  title: 'Client-Centric Design',
                  text: 'We design digital journeys that enhance user engagement and build lasting trust.',
                },
                {
                  title: 'Data-Driven Insight',
                  text: 'Turn scattered financial data into predictive insight through AI and advanced analytics.',
                },
              ].map(({ title, text }, i) => (
                <div key={i} className="p-6 rounded-xl shadow-md bg-gray-50 hover:bg-white transition">
                  <h3 className="font-bold text-xl mb-2 text-primary">{title}</h3>
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Client Video Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">See the Impact in Action</h2>
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/GCWl50HQZIM?autoplay=1&mute=1"
              title="Client success story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 text-center bg-primary text-gray-700">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold">Let’s Build Smarter Financial Systems Together</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Connect with a ValleyGate finance consultant today and discover the roadmap to your digital advantage.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
