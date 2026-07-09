import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">

      <h2 className="search-title">
        🔎 Pesquisar Personagem
      </h2>

      <input
        className="search-input"
        type="text"
        placeholder="Digite o nome do personagem..."
      />

    </div>
  );
}

export default SearchBar;