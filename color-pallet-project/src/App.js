import React, { useEffect, useState } from 'react';
import AddColorForm from './AddColorForm';
import './App.css';
import ColorPalleteItems from './ColorPalleteItems';
import Search from './Search';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [colors, setColors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/colors")
      .then((response) => response.json())
      .then((data) => {
        setColors(data);
      });
  }, []);


  const addColor = (formData) => {
    fetch("http://localhost:3000/colors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((newCr) => setColors([...colors, newCr]));
  };




  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ColorPalleteItems colors={colors} searchTerm={searchTerm} />
            <Search setSearchTerm={setSearchTerm} />
          </Route>
          <Route path="/add">
            <AddColorForm addColor={addColor} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
