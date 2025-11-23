
const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={e => onSearch(e.target.value)}
        placeholder="Search for a book..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
