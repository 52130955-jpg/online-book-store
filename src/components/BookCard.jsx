import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(book);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`"${book.title}" was added to your cart successfully.`);
    ;
  };

  return (
    <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
      <Link to={`/books/${book.id}`}>
        <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-gray-500 text-sm">{book.author}</p>
        <div className="flex items-center justify-between mt-3">
          <p className="font-bold text-blue-700">${book.price}</p>
          <button
            onClick={handleAddToCart}
            className="px-3 py-1 bg-blue-700 text-white rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
