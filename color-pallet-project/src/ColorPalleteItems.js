import { useState, useEffect } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { NavLink } from "react-router-dom";



function ColorPalleteItems({ colors, searchTerm }) {
    const [background, setBackground] = useState("#071415");
    const [current, setCurrent] = useState(null);
    const crToShow = colors.filter((cr) =>
        cr.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrent(null)
        }, 3000)
        return () => clearTimeout(timeoutId)
    }, [current])

    return (
        <div className="App" style={{ background: background }}>
            <NavLink className='button' exact to="/">Home</NavLink>
            <NavLink className='button' exact to="/add">Add Color</NavLink>
            {current !== null && <h1> Copied {current}</h1>}
            <div className="container">
                {crToShow.map((color) => (
                    <div key={color.name} className="card">
                        <div style={{
                            background: color.name,
                            filter: "brightness(85%)",
                            boxShadow: color.name === background ? "0 0 5px #000" : ""
                        }}
                            className="box"
                            onClick={() => setBackground(color.name)}>
                        </div>
                        <CopyToClipboard text={`color: ${color.name};`}>
                            <p style={{ color: color.name === background ? "#fff" : color.name, padding: "7px" }}
                                onClick={(() => setCurrent(color.name))}>{color.name}</p>
                        </CopyToClipboard>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ColorPalleteItems