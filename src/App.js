
import { useState } from 'react';
import './App.css';
import Direction from './components/Direction';
import MyLocation from './components/MyLocation';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const displayDirection = event =>{
    event.preventDefault();
    const start = event.target.origin.value;
    const end = event.target.destination.value;
    setOrigin(start);
    setDestination(end);
    
  }
  return (
    <div className="App">
      <form onSubmit={displayDirection}>
        <input type="text" name="origin" required />
        <br />
        <input type="text" name='destination' required />
        <br />
        <input type="submit" value="Show Direction" />
      </form>
      <Direction origin={origin} destination={destination}></Direction>
        {/* <MyLocation></MyLocation> */}
    </div>
  );
}

export default App;
