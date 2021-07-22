import React, {useState} from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const finalDoggos = [
  {
    id: 'boxer',
    name: 'Boxer',
    thumb: '/images/boxer.jpeg'
    
  },
  {
    id: 'chow',
    name: 'Chow Chow',
    thumb: '/images/chow.jpeg'
  },
  {
    id: 'corgi',
    name: 'Pembroke Welsh Corgi',
    thumb: '/images/corgi.jpeg'
  },
  {
    id: 'french-bulldog',
    name: 'French Bulldog',
    thumb: '/images/french-bulldog.jpeg'
  },

  {
    id: 'sheepdog',
    name: 'Old English Sheepdog',
    thumb: '/images/sheepdog.jpeg'
  },

  {
    id: 'shiba-inu',
    name: 'Shiba Inu',
    thumb: '/images/shiba-inu.jpeg'
  }

]

function App() {
  const [dogs, updateDogs] = useState(finalDoggos);

  function handleOnDragEnd(result) {
   if(!result.destination) return; 
  
    const items = Array.from(dogs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateDogs(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Doggo Ranker</h1>
        <p>Drag and drop the doggos based on the cuteness.</p>
        <DragDropContext onDragEnd={handleOnDragEnd}> 
        <Droppable droppableId="dogs">
        {(provided) => (
        <ul className="dogs" {...provided.droppableProps} ref={provided.innerRef}>
          {dogs.map(({id, name, thumb}, index) => {
            return (
            <Draggable key={id} draggableId={id} index={index}>
              {(provided) => (
              <li ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
                <div className="dogs-thumb">
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
      Images from <a href="https://www.goodhousekeeping.com/life/pets/advice/g1921/large-dog-breeds/">Good House Keeping</a> 
      </p>
    </div>
  );
}

export default App;