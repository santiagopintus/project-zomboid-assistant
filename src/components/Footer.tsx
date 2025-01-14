const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{ textAlign: "center", padding: "1rem", background: "#f1f1f1" }}
    >
      <p>&copy; {year} - Desarrollado por P1N7U5</p>
    </footer>
  );
};

export default Footer;
