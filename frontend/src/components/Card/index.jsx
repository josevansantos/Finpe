import './style.css';

import React from 'react';

const Card = () => {
  return (
    <section className="balance">
      <div className="card entrada">
        <h3>Entradas</h3>
        <p id="incomeDisplay">R$ 5.000,00</p>
      </div>

      <div className="card saida">
        <h3>Saídas</h3>
        <p id="expenseDisplay">R$ 2.000,00</p>
      </div>

      <div className="card total">
        <h3>Total</h3>
        <p id="totalDisplay">R$ 3.000,00</p>
      </div>
    </section>
  );
};

export default Card;
