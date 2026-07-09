import "./CharacterGrid.css";
import CharacterCard from "./CharacterCard";

function CharacterGrid() {
  return (
    <div className="character-grid">

      <CharacterCard
        nome="Sonic"
        especie="Ouriço"
        alinhamento="Herói"
        imagem="/images/sonic.png"
      />

      <CharacterCard
        nome="Shadow"
        especie="Ouriço"
        alinhamento="Anti-herói"
        imagem="/images/shadow.png"
      />

      <CharacterCard
        nome="Silver"
        especie="Ouriço"
        alinhamento="Herói"
        imagem="/images/silver.png"
      />

    </div>
  );
}

export default CharacterGrid;