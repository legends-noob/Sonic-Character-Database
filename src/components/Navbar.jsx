function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>🦔 Sonic Database</h1>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#1e1e2f",
    padding: "15px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    margin: 0,
    fontSize: "20px"
  }
};

export default Navbar;