import React from "react";

function Search({ setSearchTerm }) {
    return (
        <div >
            <input className="hi"
                type="text"
                placeholder="Search for a Color"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

export default Search;