import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-deep-blue -900 text-white py-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-1xl font-bold">ValleyGate Consulting</h1>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About Us</Link></li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
