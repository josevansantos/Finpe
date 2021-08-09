import React, { useContext } from 'react';

import { Context } from '../../context/AuthContext';

function Menu() {
  const { handleLogout } = useContext(Context);

  return (
    <>
      <div className="mb-5">
        <nav className="navbar bg-success justify-content-end p-3">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <button
                className="btn btn-success mr-5"
                as="a"
                href="/"
                onClick={handleLogout}
              >
                Sair
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;
