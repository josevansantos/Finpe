import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react' 

function App() {

const [dados, setDados] = useState([])


  useEffect(() => {
    fetch(`http://localhost:5000/transactions`)
      .then((response) => response.json())
      .then((data) => setDados(data));
  }, []);

  console.log("esse aqui", dados)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {dados.map((dado, index) =>
        <div key={index} className="lista">
          <p>
            {dado.description}
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
        )}
      </header>
    </div>
  );
}

export default App;