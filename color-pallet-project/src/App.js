import React, {useEffect, useState} from 'react';
import './App.css';
import ColorPalleteItems from './ColorPalleteItems';

function App() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/colors")
      .then((response) => response.json())
      .then((data) => {
        setColors(data);
      });
  }, []);



  return (
    <div className="App">
      <ColorPalleteItems colors={colors}/>
    </div>
  );
}

export default App;
