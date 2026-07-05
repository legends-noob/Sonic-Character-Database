import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import CharacterCard from "../components/CharacterCard";

function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Filter />

      <CharacterCard
        nome="Sonic"
        especie="Ouriço"
        alinhamento="Herói"
        imagem="/images/sonic.png"
      />

      <Footer />
    </>
  );
}

export default Home;