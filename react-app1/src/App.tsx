import {useState} from 'react';
import Alert from './Components/Alert'
import Button from './Components/Button'

import './App.css'

function App() {

  const [alertVisible, setAlertVisibility] = useState(false);
  
  return(
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>oinfe</Alert>}
      <Button color ="success" onClick={()=>setAlertVisibility(true)}>My Gyatt</Button>
    </div>
  );
}

export default App;