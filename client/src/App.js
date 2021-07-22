import React from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


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
        <DragDropContext> 
        <Droppable droppableId="characters">
        {(provided) => (
        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
          {Characters.map(({id, name, thumb}, index) => {
            return (
            <Draggable key={id} draggableId={id} index={index}>
              {(provided) => (
              <li ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
                <div className="characters-thumb">
                  <img src={thumb} alt={`${name} Thumb`} />
                </div>
                <p>
                  { name }
                </p>
              </li>
              )}
            </Draggable>
            );
          })}
        </ul>
       )}
      </Droppable>  
      </DragDropContext>
      </header>
      <p>
        {/* Images from <a href=""></a> */}
      </p>
    </div>
  );
}

export default App;