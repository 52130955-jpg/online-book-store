import { useParams } from "react-router-dom";
import books from "../data/books";

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find(b => b.id === Number(id));

  const handleAdd = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`"${book.title}" has been added to your cart.`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img src={book.image} alt={book.title} className="rounded-xl shadow-lg" />
      <div>
        <h1 className="text-4xl font-bold">{book.title}</h1>
        <p className="text-gray-500 text-lg">{book.author}</p>
        <p className="text-blue-700 font-bold text-3xl mt-4">${book.price}</p>
        <p className="mt-6 text-gray-700 leading-relaxed">{book.description}</p>
        <button
          onClick={handleAdd}
          className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
