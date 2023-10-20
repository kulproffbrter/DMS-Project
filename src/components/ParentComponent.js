import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import '../component css/Parent.css';

const ParentComponent = () => {
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

    const [selectedOption, setSelectedOption] = useState(null);
    const options = ["2", "3", "4", "5", "6", "7", "8"];

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [selectedStatus, setSelectedStatus] = useState('');

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    return (
        <div className='parentcomponent-content'>
            <div className={`parent-container ${isInputFocused ? 'focused' : ''}`}>
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
            <div className='dropdown-floor-container'>
                <select className='dropdown-floor' id="floorDropdown" value={selectedOption} onChange={handleOptionChange}>
                    <option value="" disabled selected>เลือกชั้น</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className='dropdown-status-container'>
                <select className='dropdown-status' id="statusDropdown" value={selectedStatus} onChange={handleStatusChange}>
                    <option value="" disabled selected >สถานะ</option>
                    <option value="เสร็จสิ้น">เสร็จสิ้น</option>
                    <option value="ยังไม่ชำระ">ยังไม่ชำระ</option>
                </select>
            </div>
            {/* <div className='create-button'>
                <button className='button-style'>
                    <AiOutlinePlus size={16} />
                    <span>เพิ่มตาราง</span>
                </button>
            </div> */}
        </div>
    );
};

export default ParentComponent;