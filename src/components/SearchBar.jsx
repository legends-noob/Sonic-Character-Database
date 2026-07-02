import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <h2>Search Character</h2>

      <input
        type="text"
        placeholder="Search by name..."
      />
    </div>
  );
}

export default SearchBar;