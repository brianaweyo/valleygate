// import { ArrowRight } from 'lucide-react'; // optional, if you want an icon

export default function Industries() {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">
      <div className="container mx-auto px-6 max-w-6xl space-y-24">

        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Industries We Empower
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At <span className="text-primary font-semibold">ValleyGate Consulting</span>, we don't just understand industries — we transform them. Discover where strategy meets innovation.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Healthcare */}
          <IndustryCard 
            title="Healthcare"
            description="From hospitals to health-tech startups, we streamline operations, digitize care, and navigate regulation — all with a human-centered approach."
            link="#healthcare"
          />

          {/* Finance & Banking */}
          <IndustryCard 
            title="Finance & Banking"
            description="We drive innovation, automate compliance, and reshape financial services into smarter, resilient systems ready for the future."
            link="#finance"
          />

          {/* Health */}
          <IndustryCard 
            title="Health"
            description="We support health institutions in delivering better outcomes through smart technologies, operational excellence, and patient-centric innovation."
            link="#health"
          />

          {/* Consumer Goods & Services */}
          <IndustryCard 
            title="Consumer Goods & Services"
            description="We help brands adapt fast — optimizing supply chains, innovating customer experiences, and capturing evolving market trends."
            link="#consumer-goods"
          />

          {/* Private Equity */}
          <IndustryCard 
            title="Private Equity"
            description="We partner with private equity firms to accelerate portfolio value creation, streamline operations, and unlock strategic growth opportunities."
            link="#private-equity"
          />

          {/* Insurance */}
          <IndustryCard 
            title="Insurance"
            description="Empowering insurers to modernize customer experiences, drive efficiencies, and navigate regulatory complexities with digital-first strategies."
            link="#insurance"
          />

          {/* Natural Resources */}
          <IndustryCard 
            title="Natural Resources"
            description="From mining to renewables, we guide companies through sustainable transformation, leveraging tech to boost productivity and environmental stewardship."
            link="#natural-resources"
          />

          {/* Retail */}
          <IndustryCard 
            title="Retail & E-Commerce"
            description="Personalize customer journeys, optimize storefronts, and create seamless omnichannel experiences that ignite sustainable growth."
            link="#retail"
          />

          {/* Energy & Utilities */}
          <IndustryCard 
            title="Energy & Utilities"
            description="We empower energy leaders to modernize infrastructure, embrace sustainability, and integrate technologies that power tomorrow's grid."
            link="#energy"
          />

          {/* Education & EdTech */}
          <IndustryCard 
            title="Education & EdTech"
            description="From legacy institutions to EdTech disruptors, we amplify missions with digital tools that make learning accessible, dynamic, and scalable."
            link="#education"
          />

        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function IndustryCard({ title, description, link }: { title: string, description: string, link: string }) {
  return (
    <div className="group p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-bold mb-4 group-hover:text-primary">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <a href={link} className="mt-6 inline-flex items-center text-primary font-semibold hover:underline">
        Learn More
        {/* <ArrowRight className="ml-2 w-4 h-4" /> */}
      </a>
    </div>
  );
}
