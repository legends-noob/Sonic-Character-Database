import "./Filter.css";

function Filter() {
  return (
    <div className="filter-container">

      <h2 className="filter-title">
        Categorias
      </h2>

      <div className="filter-buttons">

        <button className="active">
          Todos
        </button>

        <button>
          Heróis
        </button>

        <button>
          Vilões
        </button>

        <button>
          Anti-heróis
        </button>

        <button>
          Robôs
        </button>

      </div>

    </div>
  );
}

export default Filter;