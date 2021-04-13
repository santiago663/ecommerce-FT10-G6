import React from 'react';
import routes from '../routes/routes';
import '../scss/containers/_app.scss';

function App() {
  return (
    <div className="App">
      {routes()}
    </div>
  );
}

export default App;
