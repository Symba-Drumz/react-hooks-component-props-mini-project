import React from 'react';


function Header({ name, image }) {
  return (
    <header>
      <h1>{name}</h1>
      <img src={image} alt="logo" />
    </header>
  );
}
export default Header;