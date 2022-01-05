import React, { useState } from "react";

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
        <div style={{textAlign:"center"}} >
            <form  onSubmit={onSubmit} >
                <div>
                    <input type="text" name="name" onChange={handleChange} className="hi"/>
                </div>
                <button type="submit" style={{margin:"15px", borderRadius:"60px" , width:"100px", height:"px", cursor: "pointer"}}>
                    Add Color
                </button>
            </form>
        </div>
    );
}

export default AddColorForm;