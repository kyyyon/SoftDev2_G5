function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#5d4954",
        color: "#e2e2e2",
        textAlign: "center",
        padding: "20px 0",
      }}
    >
      <div className="text-center">
        &copy;{new Date().getFullYear()} TRAVEL SNAP | All rights reserved |
        Terms of Service | Privacy
      </div>
    </footer>
  );
}

export default Footer;
