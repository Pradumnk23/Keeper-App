import React from "react";

var curr_year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>© Copyright Pradumn Kumar {curr_year}</p>
    </footer>
  );
}

export default Footer;
