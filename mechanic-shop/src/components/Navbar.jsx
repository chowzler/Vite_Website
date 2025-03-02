import { Link } from "react-router-dom";
import React, { useRef } from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.center}>🔧 Reliance Automotive</h2>
      <div style={styles.center}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: { zindex : "1000",display: "flex", justifyContent: "space-between", padding: "1rem", background: "#333", color: "#fff", opacity: 0.7, height: "50px",   width: "100%", position: "fixed",  top: "0"},
  link: { marginLeft: "15px",color: "#fff", textDecoration: "none", fontSize: "18px",},
  center: { display: "flex", border: "white" ,justifyContent: "center", alignItems: "center",  marginRight: '100px'},
};

export default Navbar;
