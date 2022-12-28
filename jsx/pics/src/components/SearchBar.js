import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchTerm);
    };
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term:</label>
                <input value={searchTerm} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default SearchBar;