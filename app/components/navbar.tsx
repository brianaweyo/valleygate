import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-deep-blue -900 text-white py-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-1xl font-bold">ValleyGate Consulting</h1>
        <ul className="flex space-x-4">
          {/* Home Link with Dropdown */}
          <li className="relative group">
            <Link href="/" className="hover:underline">
              Home
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute hidden bg-white shadow-lg rounded-lg mt-2 py-2 group-hover:block transition-opacity duration-1200 opacity-0 group-hover:opacity-100">
              <ul className="space-y-2">
                <li>
                  <Link href="#hero" className="block px-6 py-2 text-gray-900 hover:text-gray-700">
                    Hero Section
                  </Link>
                </li>
                <li>
                  <Link href="#about-us" className="block px-6 py-2 text-gray-900 hover:text-gray-700">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="block px-6 py-2 text-gray-900 hover:text-gray-700">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="block px-6 py-2 text-gray-900 hover:text-gray-700">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#why-choose-us" className="block px-6 py-2 text-gray-900 hover:text-gray-700">
                    Why Choose Us?
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="block px-6 py-2 text-gray-900 hover:text-gray-700">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          {/* Other Links */}
          <li>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}