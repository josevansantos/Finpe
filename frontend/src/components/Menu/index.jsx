import './style.css';

import React from 'react';

function Menu() {
  return (
    <div className="menu">
      <a href="/">visão geral</a>
      <a href="/">cadastrar novo usuário</a>
      <a href="/login">Sair</a>
    </div>
  );
}

export default Menu;
