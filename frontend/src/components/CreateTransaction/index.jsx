import './style.css';

import React from 'react';

const CreateTransaction = () => {
  return (
    <div className="modal-transaction active">
      <div className="modal">
        <div className="form">
          <h2>Nova Transação</h2>
          <form action="">
            <div className="input-group">
              <label className="sr-only" htmlFor="date">
                Data
              </label>
              <input type="date" id="date" name="date" />
            </div>

            <div className="input-group">
              <label className="sr-only" htmlFor="description">
                Descrição
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição"
              />
            </div>

            <div className="input-group">
              <label className="sr-only" htmlFor="amount">
                Valor
              </label>
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
              <a href="/app" className="button cancel">
                Cancelar
              </a>
              <a href="/app" className="button-green">Salvar</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTransaction;
