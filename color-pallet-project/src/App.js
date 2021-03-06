import React, { useEffect, useState } from 'react';
import AddColorForm from './AddColorForm';
import './App.css';
import ColorPalleteItems from './ColorPalleteItems';
import Search from './Search';
import Message from './Message';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './NavBar';


function App() {
  const [colors, setColors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [background, setBackground] = useState("#071415");

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
    <div className='App' style={{ background: background }}>
      <Router>
        <NavBar setBackground={setBackground} />
        <Switch>
          <Route exact path="/">
            <Message />
            <ColorPalleteItems colors={colors} searchTerm={searchTerm} background={background} setBackground={setBackground} />
          </Route>
          <Route exact path="/search">
            <Search setSearchTerm={setSearchTerm} colors={colors} searchTerm={searchTerm} background={background} setBackground={setBackground} />
          </Route>
          <Route path="/add">
            <AddColorForm addColor={addColor} colors={colors} searchTerm={searchTerm} background={background} setBackground={setBackground} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
