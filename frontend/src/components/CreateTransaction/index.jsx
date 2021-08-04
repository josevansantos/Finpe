import './style.css';

import React, { useEffect, useState } from 'react';

const CreateTransaction = ({ fechaModal }) => {
  const [salvaDados, setSalvaDados] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/transactions`, {
      method: 'POST', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: {
        id: 6,
        date: '2021-06-01T00:00:00.000Z',
        description: 'Leandro',
        value: 7777,
        type: 'expends',
        userId: 1,
        createdAt: '2021-07-28T00:00:00.000Z',
        updatedAt: '2021-07-29T01:37:47.000Z',
      }, // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => setSalvaDados(data));
  }, []);

  return (
    <div className="modal-transaction active">
      <div className="modal">
        <div className="form">
          <h2>Nova Transação</h2>
          <form action="">
            <div className="input-group">
              <label>Data</label>
              <input type="date" id="date" name="date" />
            </div>

            <div className="input-group">
              <label>Descrição</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição"
              />
            </div>

            <div className="input-group">
              <label>Valor</label>
              <input
                type="number"
                step="0.01"
                id="amount"
                name="amount"
                placeholder="0,00"
              />
              <small className="help">
                Use o sinal - (negativo) para despesas e , (vírgula) para casas
                decimais
              </small>
            </div>

            <div className="input-group actions">
              <button onClick={fechaModal} className="button cancel">
                Cancelar
              </button>
              <button onSubmit={salvaDados} className="button-green">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTransaction;
