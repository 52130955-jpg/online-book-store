import books from "../data/books";
import BookGrid from "../components/BookGrid";

export default function Home({ searchTerm }) {
const displayedBooks = books.filter(
  (b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.author.toLowerCase().includes(searchTerm.toLowerCase())
);

<BookGrid books={displayedBooks} />

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-blue-700 text-white rounded-3xl p-10 mt-6 text-center">
        <h1 className="text-4xl font-bold">Discover Your Next Great Read</h1>
        <p className="mt-3 text-lg opacity-90">Explore thousands of books across all categories</p>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
          Shop Now
        </button>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Featured Books</h2>
      <BookGrid books={displayedBooks} />
    </div>
  );
}
