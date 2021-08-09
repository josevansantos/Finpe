import React, { useState, useContext } from 'react';

import { Context } from '../../context/AuthContext';

import CreateTransaction from '../CreateTransaction';

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
    <>
      <div className="mb-5">
        <nav className="navbar bg-success justify-content-center p-3">
          <div className="container justify-content-center">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <button
                  as="a"
                  href="#"
                  className="btn btn-success mr-5"
                  onClick={chamaModal}
                >
                  + Nova Transação{' '}
                </button>
                {show ? <CreateTransaction fechaModal={chamaModal} /> : <></>}
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-success ml-5"
                  as="a"
                  href="/"
                  onClick={handleLogout}
                >
                  Sair
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Menu;
