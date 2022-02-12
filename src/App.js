import React from 'react';
import ApiTable from './components/ApiTable';

const App = () => {
  return (
    <div>
      <h1>Projeto Vobys</h1>
      <div className='container'>
        <ApiTable />
      </div>
      <input placeholder='Code' />
      <button>Add</button>
    </div>
  );
}

export default App;
