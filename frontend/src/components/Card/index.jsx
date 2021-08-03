import './style.css';

import React from 'react';

const Card = () => {
  return (
    <section className="balance">
      <div className="card entrada">
        <h3>
          <span>Entradas</span>
        </h3>
        <p id="incomeDisplay">R$ 5.000,00</p>
      </div>

      <div className="card saida">
        <h3>
          <span>Saídas</span>
        </h3>
        <p id="expenseDisplay">R$ 2.000,00</p>
      </div>

      <div className="card total">
        <h3>
          <span>Total</span>
        </h3>
        <p id="totalDisplay">R$ 3.000,00</p>
      </div>
    </section>
  );
};

export default Card;
