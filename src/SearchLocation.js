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
                <label>Enter a region or country name: </label><br />
                <input type="text" onChange={handleChange} />
                <button>Go</button>
            </form>
        </div >
    );
};

export default SearchLocation;