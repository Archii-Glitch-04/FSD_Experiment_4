import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './UserForm'; // Import UserForm

function App() {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-center">Vite + React</h1>

      {/* Add UserForm Component Below */}
      <UserForm />

      <p className="read-the-docs text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
