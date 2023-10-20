import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { Datafield } from '../components/Datafield';
import React, { useState } from 'react';
import './pages css/StudentList.css';

export const StudentList = () => {
    const [data, setData] = useState(Datafield.getData());

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

    const [selectedFloor, setSelectedFloor] = useState(null);
    const optionFloor = ["2", "3", "4", "5", "6", "7", "8"];

    const handleFloorChange = (event) => {
        setSelectedFloor(event.target.value);
    };

    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const faculties = [
        'ศึกษาศาสตร์',
        'พยาบาลศาสตร์',
        'เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล'
    ];

    const handleFacultyChange = (event) => {
        setSelectedFaculty(event.target.value);
    };

    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const departments = [
        'การศึกษาปฐมวัย',
        'พละศึกษา',
        'คอมพิวเตอร์ศึกษา',
        'พยาบาลบัณฑิต',
        'เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล',
        'นวัตกรรมดิจิทัลและสื่อศิลป์',
        'ธุรกิจดิจิทัล'
    ];

    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
    };

    /*const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);

     const handleToggleOptionsMenu = () => {
        setIsOptionsMenuOpen(!isOptionsMenuOpen);
    }; */

    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemEditVisible = (id) => {
        setSelectedItem(selectedItem === id ? null : id);
    };

    //ฟังก์ชันแก้ไขข้อมูลในตาราง คอลัมน์ "ชั้น"
    const handleFloorChangeInRow = (event, id) => {
        const updatedData = data.map((item) => {
            if (item.studentId === id) {
                return { ...item, floor: event.target.value };
            }
            return item;
        });
        setData(updatedData);
    };

    //ฟังก์ชันแก้ไขข้อมูลในตาราง คอลัมน์ "ห้อง"
    const handleRoomChangeInRow = (event, id) => {
        const updatedData = data.map((item) => {
            if (item.studentId === id) {
                return { ...item, roomNumber: event.target.value };
            }
            return item;
        });
        setData(updatedData);
    };

    return (
        <div>
            <div className='page-content'>
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
                <div className='dropdown-floor-container'>
                    <select className='dropdown-floorSelected' id="floorDropdown" value={selectedFloor} onChange={handleFloorChange}>
                        <option value="" disabled selected>เลือกชั้น</option>
                        {optionFloor.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='dropdown-faculty-container'>
                    <select className='dropdown-faculty' id="facultyDropdown" value={selectedFaculty} onChange={handleFacultyChange}>
                        <option value="" disabled selected>คณะ</option>
                        {faculties.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='dropdown-department-container'>
                    <select className='dropdown-department' id="departmentDropdown" value={selectedDepartment} onChange={handleDepartmentChange}>
                        <option value="" disabled selected>สาขา</option>
                        {departments.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                {/* <div className='control-edit' onClick={handleToggleOptionsMenu}>
                    <AiOutlineMore size={20} />
                    {isOptionsMenuOpen && (
                        <div className="options-menu">
                            <ul>
                                <li onClick={handleItemEditVisible}>แก้ไขข้อมูล</li>
                            </ul>
                        </div>
                    )}
                </div> */}
            </div>
            <div className='datalist-container'>
                <table className="student-table">
                    <thead className='text-header'>
                        <tr>
                            <th>ชั้น</th>
                            <th>ห้อง</th>
                            <th>รหัสนักศึกษา</th>
                            <th>ชื่อ-นามสกุล</th>
                            <th>คณะ</th>
                            <th>สาขา</th>
                            <th>เบอร์โทรศัพท์</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr className='text-data' key={item.studentId}>
                                <td>
                                    {selectedItem === item.studentId ? (
                                        <input
                                            type="number"
                                            value={item.floor}
                                            onChange={(e) => handleFloorChangeInRow(e, item.studentId)}
                                            min="2"
                                            max="8"
                                        />
                                    ) : (
                                        item.floor
                                    )}
                                    <BiEditAlt onClick={() => handleItemEditVisible(item.studentId)} />
                                </td>

                                <td>
                                    {selectedItem === item.studentId ? (
                                        <input
                                            type="text"
                                            value={item.roomNumber}
                                            onChange={(e) => handleRoomChangeInRow(e, item.studentId)}
                                        />
                                    ) : (
                                        item.roomNumber
                                    )}
                                    <BiEditAlt onClick={() => handleItemEditVisible(item.studentId)} />
                                </td>

                                <td>{item.studentId}</td>
                                <td>{item.name}</td>
                                <td>{item.faculty}</td>
                                <td>{item.department}</td>
                                <td>{item.telephoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
