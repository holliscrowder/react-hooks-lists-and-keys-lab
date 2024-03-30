import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksA = links.map((link) => {
    return (
      <a key={link} href={"#" + link}>
        {link}
      </a>
    );
  });

  return <nav>{linksA}</nav>;
}

export default NavBar;
