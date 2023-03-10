import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format'
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css//react-big-calendar.css'
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import './App.css';

const locales = {
  'en-US': require('date-fns/locale/en-US')
}
 const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
 })

 //* If allDay 'false' --> Give user option to select time frame
const events = [
  {
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2023,0,10),
    end: new Date(2023,0,10)
  },
  {
    title: 'Vacation',
    start: new Date(2023,1,10),
    end: new Date(2023,1,15)
  },
  {
    title: 'Dr Apt',
    allDay: false,
    start: new Date(2023,1,27),
    end: new Date(2023,1,27)
  }
]
 

function App() {
  
  const [newEvent,setNewEvent] = useState({title: '', start:'', end:'',})
  const [allEvents,setAllEvents] = useState(events)


  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input type='text' placeholder='Add Title' style={{width: '20%' , marginRight: '10px'}}
          value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
        />
        <DatePicker placeholderText='Start Date' style={{marginRight: '10px'}}
        selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}/>
        <DatePicker placeholderText='End Date' 
        selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}/>
        <button type='submit' style={{marginTop: '10px'}} onClick={handleAddEvent}>Add Event</button>
      </div>
      <Calendar localizer={localizer} events={allEvents} 
      startAccessor='start' endAccessor='end' style={{height:500, margin:'50px'}}/>
    </div>
  );
}

export default App;
