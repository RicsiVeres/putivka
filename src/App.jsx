import React from 'react';
import './App.css';
import Ticket from './Ticket';
import Tasks from './Tasks';
import { TicketsProvider } from './TicketsContext';

function App() {
  return (
    <TicketsProvider>
      <div className="App">
        <h1>Путівка</h1>
        <Ticket />
        <br />
        <br />
        <Tasks />
      </div>
    </TicketsProvider>
  );
}

export default App;
