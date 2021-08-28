import React, { useEffect, useState } from 'react';
import api from '../../config';

const EditTransaction = (props) => {
  const [id] = useState(props.match.params.id);
  const [formValues, setFormValue] = useState({});

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setFormValue({ ...formValues, [name]: value });
  };

  useEffect(() => {
    const getTransaction = async () => {
      const headers = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };
      await api.get(`transactions/${id}`, headers).then((response) => {
        setFormValue(response.data);
      });
    };
    getTransaction();
  }, [id]);

  const editTransaction = async (event) => {
    event.preventDefault();
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    await api
      .put(`transactions/${id}`, formValues, headers)
      .then((response) => {
        console.log('response:', response);
      });
    window.location = '/dashboard';
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div>
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className>
                  <h1 className="mb-5 mt-5"> Editar</h1>
                  <div className="d-flex align-items-center py-5">
                    <form onSubmit={editTransaction}>
                      <input
                        className="form-control border-0 shadow-sm px-4"
                        type="hidden"
                        name="userId"
                        id="user"
                        onChange={handleInputChange}
                        value={formValues.userId || ''}
                      />
                      <input
                        className="form-control border-0 shadow-sm px-4 mb-3"
                        type="date"
                        name="date"
                        id="date"
                        onChange={handleInputChange}
                      />
                      <input
                        className="form-control border-0 shadow-sm px-4 mb-3"
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Descrição"
                        onChange={handleInputChange}
                        value={formValues.description || ''}
                      />
                      <input
                        className="form-control border-0 shadow-sm px-4 mb-3"
                        type="number"
                        step="0.01"
                        id="value"
                        name="amount"
                        placeholder="0,00"
                        onChange={handleInputChange}
                        value={formValues.amount || ''}
                      />
                      <div className="custom-control custom-radio">
                        <label className="m-1 align-items-center">
                          <input
                            className="m-1 align-items-center"
                            type="radio"
                            name="type"
                            value="expense"
                            onChange={handleInputChange}
                          />
                        </label>
                        Despesa
                        <label className="m-1 align-items-center">
                          <input
                            className="m-1 align-items-center"
                            type="radio"
                            name="type"
                            value="income"
                            onChange={handleInputChange}
                          />
                        </label>
                        Receita
                      </div>
                      <div className="input-group actions">
                        <button
                          type="button"
                          className="btn btn-danger btn-lg btn-block rounded"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          className="btn btn-success btn-lg btn-block rounded"
                        >
                          Salvar
                        </button>
                        {/* <a
                          className="btn btn-info btn-lg btn-block rounded"
                          href="/transaction/create"
                        >
                          Voltar
                        </a> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTransaction;
