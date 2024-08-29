import React, { useState, useEffect } from 'react';

const SearchSuggestions = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // useEffect(() => {
  //   if (inputValue) {
  //     // Simulate an API call
  //     fetch(`https://api.example.com/search?q=${inputValue}`)
  //       .then((response) => response.json())
  //       .then((data) => setSearchResults(data.results))
  //       .catch((error) => console.error('Error fetching data:', error));
  //   }
  // }, [inputValue]);

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Search...'
      />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSuggestions;
