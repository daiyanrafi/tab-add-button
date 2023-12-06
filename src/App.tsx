// src/App.tsx

import * as React from 'react';
import TableComponent from './components/TableComponent';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Table</h1>
      <div className="formContainer">
        <TableComponent />
      </div>
    </div>
  );
};

export default App;
