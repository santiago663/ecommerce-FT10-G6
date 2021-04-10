import React from 'react';
import routes from '../routes/routes';
import './App.styl';

function App() {
  return (
    <div className="App">
      {routes()}
    </div>
  );
}

export default App;
