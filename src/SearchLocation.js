import { useState } from "react";

function SearchLocation({ onSubmit }) {
    const [location, setLocation] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (location) {
            onSubmit(location);
        }
    };

    const handleChange = (e) => {
        setLocation(e.target.value);
    };

    return (
        <div className="form">
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleChange} placeholder="Search country or region" />
                <button>Go</button>
            </form>
        </div >
    );
};

export default SearchLocation;