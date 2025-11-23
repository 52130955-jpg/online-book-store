// Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar({ cart, searchTerm, setSearchTerm }) {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          OnlineBookstore
        </Link>

        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 px-4 py-2 border rounded-xl shadow-sm"
        />

        <Link to="/cart" className="relative text-gray-700 hover:text-blue-700">
          🛒
          <span className="absolute -top-2 -right-3 bg-blue-700 text-white rounded-full px-2 text-xs">
            {cart.length}
          </span>
        </Link>
      </div>
    </header>
  );
}
