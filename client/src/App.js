import React from 'react';
import './App.css';

const Characters = [
  {
    id: 'one',
    name: 'Character One',
    thumb: '/images/one.png'
  },
  {
    id: 'two',
    name: 'Character Two',
    thumb: '/images/two.png'
  },
  {
    id: 'three',
    name: 'Character Three',
    thumb: '/images/three.png'
  },
  {
    id: 'four',
    name: 'Character Four',
    thumb: '/images/four.png'
  },
  {
    id: 'five',
    name: 'Character Five',
    thumb: '/images/five.png'
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Characters</h1>
        <ul className="characters">
          {Characters.map(({id, name, thumb}) => {
            return (
              <li key={id}>
                <div className="characters-thumb">
                  <img src={thumb} alt={`${name} Thumb`} />
                </div>
                <p>
                  { name }
                </p>
              </li>
            );
          })}
        </ul>
      </header>
      <p>
        {/* Images from <a href=""></a> */}
      </p>
    </div>
  );
}

export default App;