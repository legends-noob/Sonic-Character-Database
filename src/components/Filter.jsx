import "./Filter.css";

function Filter() {
  return (
    <div className="filter-container">
      <label htmlFor="categoria">Categoria</label>

      <select id="categoria" className="filter-select">
        <option>Todos</option>
        <option>Heróis</option>
        <option>Vilões</option>
        <option>Anti-heróis</option>
        <option>Robôs</option>
      </select>
    </div>
  );
}

export default Filter;