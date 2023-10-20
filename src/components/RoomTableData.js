/* import '../component css/RoomTableData.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const RoomTableData = () => {
    const [selectedFloor, setSelectedFloor] = useState(2);
    const [roomData, setRoomData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `http://localhost:4000/Info?floor=${selectedFloor}`
                );
                if (res.ok) {
                    const data = await res.json();
                    setRoomData(data);
                } else {
                    setRoomData([]); // Set roomData to an empty array if there's no data
                }
            } catch (error) {
                console.error("Error fetching room data:", error);
            }
        };

        fetchData();
    }, [selectedFloor]);

    const handleSelectChange = (event) => {
        setSelectedFloor(event.target.value);
    };

    const handleRoomClick = (roomNumber) => {
        setRoomData((prevRoomData) =>
            prevRoomData.map((room) =>
                room.roomNumber === roomNumber && room.quantity
            )
        );
    };

    return (
        <>
            <div className="flex-container">
                <div className="dropdown-num-container">
                    <select className="dropdown-num-floor" value={selectedFloor} onChange={handleSelectChange}>
                        <option value="2">ชั้น 2</option>
                        <option value="3">ชั้น 3</option>
                        <option value="4">ชั้น 4</option>
                        <option value="5">ชั้น 5</option>
                        <option value="6">ชั้น 6</option>
                        <option value="7">ชั้น 7</option>
                        <option value="8">ชั้น 8</option>
                    </select>
                </div>
            </div>
            <div className='data-room-table'>
                <table className='info-table-all'>
                    <thead className="T-header">
                        <tr>
                            <th>ห้อง</th>
                            <th>สถานะ</th>
                            <th>จำนวน</th>
                            <th>ค่าบริการ</th>
                            <th>ประเภทห้อง</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roomData.length > 0 ? (
                            roomData
                                .slice()
                                .sort((a, b) => a.roomNumber.localeCompare(b.roomNumber))
                                .map((room) => (
                                    <tr key={room.roomNumber} className="roomNumber">
                                        <td>
                                            <Link to='/dashboard/total-rooms/user-member' className='nav-link'>
                                                <button className={`room-status-button ${room.status === "ว่าง"
                                                    ? "background-color-emp" : "background-color-none"}`}
                                                    onClick={handleRoomClick(room.roomNumber)}>
                                                    {room.roomNumber}
                                                </button>
                                            </Link>
                                        </td>

                                        <td>{room.quantity === "4/4" ? "ไม่ว่าง" : "ว่าง"}</td>
                                        <td>{room.quantity}</td>
                                        <td>{room.cost}</td>
                                        <td>{room.type}</td>
                                    </tr>
                                ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="show-no-data">
                                    ไม่มีข้อมูลห้อง
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="Box-icon-container">
                <div className="icon-group">
                    <div className="Boxs1">
                        <div className="stage-empty">ว่าง</div>
                    </div>
                    <div className="Boxs2">
                        <div className="stage-none">ไม่ว่าง</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomTableData; */

import '../component css/RoomTableData.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const RoomTableData = () => {
    const [selectedFloor, setSelectedFloor] = useState("2");
    const [roomData, setRoomData] = useState([]);

    const fetchData = async (selectedFloor) => {
        try {
            const res = await fetch(`http://localhost:4000/Info?floor=${selectedFloor}`);
            if (res.ok) {
                const data = await res.json();
                setRoomData(data);
            } else {
                setRoomData([]); // Set roomData to an empty array if there's no data
            }
        } catch (error) {
            console.error("Error fetching room data:", error);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data for floor 2 when the component is loaded
    }, [selectedFloor]);

    const handleSelectChange = (event) => {
        setSelectedFloor(event.target.value);
    };

    const handleRoomClick = (roomNumber) => {
        setRoomData((prevRoomData) =>
            prevRoomData.map((room) =>
                room.roomNumber === roomNumber && room.quantity !== "4/4"
                    ? { ...room, status: "ว่าง" }
                    : room
            )
        );
    };

    return (
        <>
            <div className="flex-container">
                <div className="dropdown-num-container">
                    <select className="dropdown-num-floor" onChange={handleSelectChange}>
                        <option value="2">ชั้น 2</option>
                        <option value="3">ชั้น 3</option>
                        <option value="4">ชั้น 4</option>
                        <option value="5">ชั้น 5</option>
                        <option value="6">ชั้น 6</option>
                        <option value="7">ชั้น 7</option>
                        <option value="8">ชั้น 8</option>
                    </select>
                </div>
            </div>
            <div className='data-room-table'>
                <table className='info-table-all'>
                    <thead className="T-header">
                        <tr>
                            <th>ห้อง</th>
                            <th>สถานะ</th>
                            <th>จำนวน</th>
                            <th>ค่าบริการ</th>
                            <th>ประเภทห้อง</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roomData.length > 0 ? (
                            roomData
                                .slice()
                                .sort((a, b) => a.roomNumber.localeCompare(b.roomNumber))
                                .map((room) => (
                                    <tr key={room.roomNumber} className="roomNumber">
                                        <td>
                                            <Link to='/dashboard/total-rooms/user-member' className='nav-link'>
                                                <button className={`room-status-button ${room.status === "ว่าง" ? "background-color-emp" : "background-color-none"}`}
                                                    onClick={() => handleRoomClick(room.roomNumber)}>
                                                    {room.roomNumber}
                                                </button>
                                            </Link>
                                        </td>
                                        <td>{room.quantity}</td>
                                        <td>{room.cost}</td>
                                        <td>{room.type}</td>
                                    </tr>
                                ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="show-no-data">
                                    ไม่มีข้อมูลห้อง
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="Box-icon-container">
                <div className="icon-group">
                    <div className="Boxs1">
                        <div className="stage-empty">ว่าง</div>
                    </div>
                    <div className="Boxs2">
                        <div className="stage-none">ไม่ว่าง</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomTableData;
