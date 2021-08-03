import './style.css';

import React, { useState } from 'react';
import CreateTransaction from '../CreateTransaction';

function Menu() {
  const [show, setShow] = useState (false); 
  const chamaModal = () => {
    if (show === true) {
      return setShow(false)
    } else {
      return setShow(true)
    }
  }
  return (
    <div className="menu">
      <button className="button-menu" onClick={chamaModal}>+ Nova Transação </button>
      {show?<CreateTransaction />:<></>}
      <a href="/create">Cadastrar usuário</a>
      <a href="/login">Sair</a>
    </div>
  );
}

export default Menu;
