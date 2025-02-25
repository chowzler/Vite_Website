import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2>🔧 Mechanic Shop</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: { display: "flex", justifyContent: "space-between", padding: "1rem", background: "#333", color: "#fff" },
  link: { marginLeft: "15px", color: "#fff", textDecoration: "none", fontSize: "18px" }
};

export default Navbar;
