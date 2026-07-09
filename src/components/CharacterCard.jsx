import "./CharacterCard.css";

function CharacterCard(props) {
  return (
    <div className="character-card">

      <h2>{props.nome}</h2>

      <img
        src={props.imagem}
        alt={props.nome}
        className="character-image"
      />

      <p className="categoria">{props.categoria}</p>

      <p className="especie">
        Espécie: {props.especie}
      </p>

      <button>Ver detalhes</button>

    </div>
  );
}

export default CharacterCard;