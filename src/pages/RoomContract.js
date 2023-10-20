import '../pages/pages css/Contract.css';
import { DataContract } from '../components/DataContract';
import { DualtextButton } from '../components/DualtextButton'
import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';


export const RoomContract = () => {
  const data = DataContract.getData();

  const [query, setQuery] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleClear = () => {
    setQuery('');
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div>
      <div className='content'>
        <div className={`search-container ${isInputFocused ? 'focused' : ''}`}>
          <div className='icon-search'>
            <AiOutlineSearch size={20} />
          </div>
          <div className="search-bar">
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
        <div className='button-frame'>
          <button className='button-frame-style'>
            <AiOutlinePlus size={16} />
            <span>เพิ่มตาราง</span>
          </button>
        </div>
      </div>
      <div className='contract-container'>
        {data.map((item, index) => (
          <DualtextButton
            key={index}
            contractID={item.contractID}
            contractName={item.contractName}
          />
        ))}
      </div>
    </div>
  );
};

