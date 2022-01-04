import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function AddColorForm({ addColor }) {
    const [formData, setFormData] = useState({
        name: "",
        id: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formData };
        addColor(newData);
    };

    return (
        <div className="ui segment">
            <NavLink className='button' exact to="/">Home</NavLink>
            <NavLink className='button' exact to="/add">Add Color</NavLink>
            <form className="ui form" onSubmit={onSubmit}>
                <div className="inline fields">
                    <input type="text" name="name" onChange={handleChange} />
                </div>
                <button className="ui button" type="submit">
                    Add Color
                </button>
            </form>
        </div>
    );
}

export default AddColorForm;