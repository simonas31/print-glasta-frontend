import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center border-b border-gray-800">
      <span className="font-bold">GlassPrint</span>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
