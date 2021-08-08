// import './style.css';
import { ButtonMenu, MenuStyle } from './style';

import React, { useState, useContext } from 'react';

import { Context } from '../../context/AuthContext';

import CreateTransaction from '../CreateTransaction';
import { Container } from '../../styles';

function Menu() {
  const { handleLogout } = useContext(Context);

  const [show, setShow] = useState(false);
  const chamaModal = () => {
    if (show === true) {
      return setShow(false);
    } else {
      return setShow(true);
    }
  };
  return (
    <Container>
      <MenuStyle>
        <ButtonMenu
          as="a"
          href="#"
          className="button-menu"
          onClick={chamaModal}
        >
          + Nova Transação{' '}
        </ButtonMenu>
        {show ? <CreateTransaction fechaModal={chamaModal} /> : <></>}
        <ButtonMenu as="a" href="/create">
          Cadastrar usuário
        </ButtonMenu>
        <ButtonMenu as="a" href="/#" onClick={handleLogout}>
          Sair
        </ButtonMenu>
      </MenuStyle>
    </Container>
  );
}

export default Menu;
