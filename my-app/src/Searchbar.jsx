import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement your search logic here
        console.log('Search query:', query);
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
