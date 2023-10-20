import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import '../component css/Searchbox.css';

const SearchBox = () => {
    const [query, setQuery] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    const handleClear = () => {
        setQuery('');
    };

    return (
        <div className={`container ${isInputFocused ? 'focused' : ''}`}>
            <div className='icon-search'>
                <AiOutlineSearch size={20} />
            </div>
            <div className="search-box">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    placeholder="ค้นหา..."
                />
            </div>
            <div className='icon-close'>
                {query && (
                    <AiOutlineClose size={20} onClick={handleClear} />
                )}
            </div>
        </div>
    );
};

export default SearchBox;
