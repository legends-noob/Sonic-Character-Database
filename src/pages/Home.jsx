import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import CharacterGrid from "../components/CharacterGrid";

function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Filter />

      <CharacterGrid />

      <Footer />
    </>
  );
}

export default Home;