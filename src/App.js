import './App.css';
import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar';
import { useState } from 'react';



function App() {

  function addNewDayNotesChange(e) {
    setNewDayNotes(e.target.value);
  }
  
  function handleAddDayNotes(e) {
    e.preventDefault();
    setDayNotes([...dayNotes, newDayNotes]);
    setNewDayNotes('');
  }

  const [value, onChange] = useState(new Date());
  const [dayNotes, setDayNotes] = useState([]);
  const [newDayNotes, setNewDayNotes] = useState('');
  return (
    <div className="App">
      <div className="window">
        <div className='top-bar'>
          <p>Welcome Back!</p>
        </div>
        <Calendar onChange={onChange} value={value}/>
        <input 
        type="text"
        value={newDayNotes}
        onChange={addNewDayNotesChange}
        ></input>
        <button onClick={handleAddDayNotes}>+</button>
        {dayNotes.map((dayNotes, index) => (
          <p key={index}>{dayNotes}</p>
        ))}
        
      </div>

    </div>
  );
}

export default App;
