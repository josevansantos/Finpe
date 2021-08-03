import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';

import Transactions from './components/Transactions';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/transactions`)
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  console.log('esse aqui =>', transactions);

  return (
    <div className="App">
      <Transactions transactions={transactions} />
      {/* {dados.map((dado, index) => (
          <div key={index} className="lista">
          </p>
          <p>
            {dado.value}
          </p>
          <p>
            {dado.date}
          </p>
          <p>
            {dado.type}
          </p>
          </div>
        ))} */}
    </div>
  );
}

export default App;
