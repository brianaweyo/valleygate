import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white py-10 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        
        {/* Left Section - Navigation & Copyright */}
        <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
                <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
                <li><Link href="/terms" className="hover:text-blue-400">Terms & Conditions</Link></li>
                <li><Link href="/locations" className="hover:text-blue-400">Our Locations</Link></li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">
                © {new Date().getFullYear()} ValleyGate Consultancy Ltd. All Rights Reserved.
            </p>
    </div>

        {/* Right Section - Social Media */}
        <div className="mt-6 md:mt-0">
          <h2 className="text-lg font-semibold mb-4">Stay Connected</h2>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
              <FaLinkedin className="text-gray-400 text-2xl transition-all group-hover:text-blue-500 group-hover:scale-110" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group">
              <FaTwitter className="text-gray-400 text-2xl transition-all group-hover:text-blue-400 group-hover:scale-110" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group">
              <FaFacebook className="text-gray-400 text-2xl transition-all group-hover:text-blue-600 group-hover:scale-110" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group">
              <FaInstagram className="text-gray-400 text-2xl transition-all group-hover:text-pink-500 group-hover:scale-110" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
