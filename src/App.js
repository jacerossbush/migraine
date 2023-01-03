import './App.css';
import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar';
import { useState } from 'react';

function App() {
  const [value, onChange] = useState(new Date());
  const [dayNotes, setDayNotes] = useState([]);
  const [newDayNotes, setNewDayNotes] = useState('');

  function addDayNotes(e) {
    setDayNotes([...dayNotes, newDayNotes]);
    setNewDayNotes('');
  }

  return (
    <div className="App">
      <div className="window">
        <div className='top-bar'>
          <p>Welcome Back Champ!</p>
        </div>
        <Calendar onChange={onChange} value={value}/>
        <input 
          type="text"
          value={newDayNotes}
          onChange={e => (setNewDayNotes(e.target.value))}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              addDayNotes(e);
            }
          }}
        />
        <button onClick={addDayNotes}>+</button>
        {dayNotes.map((dayNotes, index) => (
          <p key={index}>{dayNotes}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
