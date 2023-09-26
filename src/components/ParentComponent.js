import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import '../component css/Parent.css';

const ParentComponent = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleClear = () => {
        setQuery('');
    };

    return (
        <div className='parent-container'>
            <div className='search-container'>
                <div className='icon-search'>
                    <AiOutlineSearch size={20} />
                </div>
                <div className="search-box">
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search..."
                    />
                </div>
                <div className='icon-close'>
                    {query && (
                        <AiOutlineClose size={20} onClick={handleClear} />
                    )}
                </div>
            </div>
            <div className='button-frame'>
                <button>
                    <AiOutlinePlus size={20} />
                    <span>Create new</span>
                </button>
            </div>
        </div>
    );
};

export default ParentComponent;