import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format'
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css//react-big-calendar.css'
import React, { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
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
    start: new Date(2023,6,0),
    end: new Date(2023,6,0)
  },
  {
    title: 'Vacation',
    start: new Date(2023,6,0),
    end: new Date(2023,6,0)
  },
  {
    title: 'Dr Apt',
    allDay: false,
    start: new 
    start: new Date(2023,6,0),
    end: new Date(2023,6,0)
  }
]
 

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
