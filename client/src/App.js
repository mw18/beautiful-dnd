import React, {useState} from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const finalCharacters = [
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
  const [characters, updateCharacters] = useState(finalCharacters);

  function handleOnDragEnd(result) {
   if(!result.destination) return; 
  
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}> 
        <Droppable droppableId="characters">
        {(provided) => (
        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
          {characters.map(({id, name, thumb}, index) => {
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
          {provided.placeholder}
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