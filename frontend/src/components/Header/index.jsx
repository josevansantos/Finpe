import './style.css';
import React from 'react';

function Header() {
  return (
      <div className="menu">
        <a href="#">visão geral</a>
        <br/>
        <a href="#">cadastrar novo usuário</a>
        <br/>
        <a href="#">sair</a>
        <br/>
      </div>
  );
}

export default Header;
