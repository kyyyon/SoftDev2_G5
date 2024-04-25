function Header() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "8vh",
        backgroundColor: "#5d4954",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <a href="#" style={{ textDecoration: "none", color: "#e2e2e2" }}>
        <div
          style={{
            color: "#e2e2e2",
            textTransform: "uppercase",
            letterSpacing: "5px",
            fontSize: "22px",
            fontWeight: "bold",
            margin: "auto",
          }}
        >
          Travel Snap
        </div>
      </a>
    </nav>
  );
}

export default Header;
