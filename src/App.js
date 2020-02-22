import React from 'react';

import Layaout from './container/Layaout/Layaout'
import Tasks from './container/Tasks/Tasks'

function App() {
  return (
    <div>
      <Layaout>
        <Tasks/>
      </Layaout>      
    </div>
  );
}

export default App;
