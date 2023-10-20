//หน้าย่อยของ List of rooms ใช้ create ข้อมูลบิลขึ้นมาเพื่อส่งให้ user
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './pages css/MakeBill.css'
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdCalendarMonth } from 'react-icons/md';

const BillForm = () => {
    const [selectedDateOfPrice, setSelectedDateOfPrice] = useState(null);
    const [selectedDateOfUtility, setSelectedDateOfUtility] = useState(null);


    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModalToggle = () => {
        setIsModalVisible(!isModalVisible);
    };

    const [isModalPriceVisible, setIsModalPriceVisible] = useState(false);

    const handleModalPriceToggle = () => {
        setIsModalPriceVisible(!isModalPriceVisible);
    };

    const [RoomPrices, setRoomPrices] = useState('');  // ตัวแปรสำหรับราคาห้อง
    const [customRoomPrices, setCustomRoomPrices] = useState('');

    //ตัวแปรที่ใช้ในการคำนวณ
    const [totalWaterElectricityCost, setTotalWaterElectricityCost] = useState(null);
    const [costPerMember, setCostPerMember] = useState(null);

    const [waterNum, setWaterNum] = useState('');
    const [electricityNum, setElectricityNum] = useState('');
    const [memberNum, setMemberNum] = useState('');

    const handleWaterInputChange = (e) => {
        setWaterNum(e.target.value);
    };

    const handleElectricityInputChange = (e) => {
        setElectricityNum(e.target.value);
    };

    const handleMemberInputChange = (e) => {
        setMemberNum(e.target.value);
    };

    const handleCalculate = () => {
        const waterTotal = parseFloat(waterNum) * 16;
        const electricityTotal = parseFloat(electricityNum) * 7;
        const totalCost = waterTotal + electricityTotal;
        const costPerMember = totalCost / parseFloat(memberNum);

        setTotalWaterElectricityCost(totalCost);
        setCostPerMember(costPerMember);
    };

    return (
        <div className="bill-form">
            <div className='row1-container'>
                <div className="row-member">
                    <h2>สมาชิก</h2>
                </div>
                <div className='getdata-show'>
                    <span>651568910</span> {/* id */}
                    <span>นางสาวยารินี มูลกิจ</span> {/* name */}
                    <span>คณะศึกษาศาสตร์</span> {/* faculty */}
                    <span>สาขาการศึกษาปฐมวัย</span> {/* department */}
                </div>
                <div className='getdata-show'>
                    <span>641237668</span> {/* id */}
                    <span>นางสาวสมรวย ทรายทอง</span> {/* name */}
                    <span>คณะศึกษาศาสตร์</span> {/* faculty */}
                    <span>สาขาการศึกษาปฐมวัย</span> {/* department */}
                </div>
                <div className='getdata-show'>
                    <span>654455667</span> {/* id */}
                    <span>นางสาวสราวดี มีเพชร</span> {/* name */}
                    <span>คณะพยาบาลศาสตร์</span> {/* faculty */}
                    <span>สาขาพยาบาลบัณฑิต</span> {/* department */}
                </div>
                <div className='getdata-show'>
                    <span>651111923</span> {/* id */}
                    <span>นางสาวธีรดา ศิลปการแสดง</span> {/* name */}
                    <span>คณะพยาบาลศาสตร์</span> {/* faculty */}
                    <span>สาขาพยาบาลบัณฑิต</span> {/* department */}
                </div>

            </div>
            <div className='row2-container'>
                <div className="row-price">
                    <h2>ราคาห้อง</h2>
                </div>
                <div className="row-button">
                    <button className="green-button" onClick={handleModalPriceToggle} >สร้างบิล</button>
                </div>
            </div>

            <div className='row3-container'>
                <div className="row-utility">
                    <h2>ค่าน้ำค่าไฟ</h2>
                </div>
                <div className="row-button">
                    <button className="green-button" onClick={handleModalToggle} >สร้างบิล</button>
                </div>
            </div>

            {/* Modal Price Bill */}
            {isModalPriceVisible && (
                <div className="modal-price">
                    <div className="modal-price-content">
                        <div className='top-row-price'>
                            <h3 className='title-bill1'>บิลราคาห้อง</h3>
                            <div className="modal-close" onClick={handleModalPriceToggle}>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="calendar-price-container">
                            <label className='title-price-calendar'>เลือกวันที่:</label>
                            <div className='date-priceContent-show'>
                                <DatePicker
                                    className='Date-content1'
                                    selected={selectedDateOfPrice}
                                    onChange={date => setSelectedDateOfPrice(date)}
                                    dateFormat="MM/dd/yyyy"
                                    popperPlacement="top-start"
                                />
                            </div>
                            <div className="icon-price-calendar">
                                <MdCalendarMonth size={20} />
                            </div>
                        </div>


                        {RoomPrices === 'other' ? (
                            <div className='label-bill-price'>
                                <label htmlFor="roomPrice">ราคาห้อง:</label>
                                <input
                                    className='input-box-price'
                                    type="text"
                                    id="roomPrices"
                                    name="roomPrices"
                                    value={customRoomPrices}
                                    onChange={(e) => setCustomRoomPrices(e.target.value)}
                                />
                                <label className='unit' htmlFor="unitPrice">บาท</label>
                            </div>
                        ) : (
                            <div className='label-bill-price'>
                                <label htmlFor="roomPrices">ราคาห้อง:</label>
                                <select
                                    id="roomPrices"
                                    name="roomPrices"
                                    value={RoomPrices}
                                    onChange={(e) => setRoomPrices(e.target.value)}
                                >
                                    <option value="6000">6,000</option>
                                    <option value="15000">15,000</option>
                                    <option value="other">อื่นๆ</option>
                                </select>
                                <label className='unit' htmlFor="unitPrice">บาท</label>
                            </div>
                        )}
                        <div className='savebutton1-container'>
                            <button className='save-input-price' onClick={handleModalPriceToggle} >บันทึก</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Utility Bill */}
            {isModalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <div className='top-row'>
                            <h3 className='title-bill2'>บิลค่าน้ำค่าไฟ</h3>
                            <div className="modal-close" onClick={handleModalToggle}>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="calendar-utility-container">
                            <label className='title-utility-calendar'>เลือกวันที่:</label>
                            <div className='date-utilityContent-show'>
                                <DatePicker
                                    className='Date-content2'
                                    selected={selectedDateOfUtility}
                                    onChange={date => setSelectedDateOfUtility(date)}
                                    dateFormat="MM/dd/yyyy"
                                    popperPlacement="top-start"
                                />
                            </div>
                            <div className="icon-utility-calendar">
                                <MdCalendarMonth size={20} />
                            </div>
                        </div>

                        <table className='table-utility-container'>
                            <thead>
                                <tr className='head-table-utility'>
                                    <th>ค่าน้ำ</th>
                                    <th>ค่าไฟ</th>
                                    <th>สมาชิก</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className='water-num' type="text" placeholder="กรอกค่าน้ำ" onChange={handleWaterInputChange} /></td>
                                    <td><input className='electricity-num' type="text" placeholder="กรอกค่าไฟ" onChange={handleElectricityInputChange} /></td>
                                    <td><input className='member-num' type="text" placeholder="กรอกจำนวนสมาชิก" onChange={handleMemberInputChange} /></td>
                                </tr>
                            </tbody>
                        </table>

                        <div className='cost-show'>
                            <button className='calculate' onClick={handleCalculate}>คำนวณ</button>
                            {totalWaterElectricityCost !== null && (
                                <span className='message-calculate-show'>ค่าน้ำค่าไฟรวม {totalWaterElectricityCost} บาท</span>
                            )}
                            {costPerMember !== null && (
                                <span className='message-calculate-show'>หารตามจำนวนสมาชิกจะได้ {costPerMember} บาท</span>
                            )}
                        </div>
                        <div className='savebutton2-container'>
                            <button className='save-input-utility' onClick={handleModalToggle}>บันทึก</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

const MakeBill = () => {

    return (
        <div className='bill-scope'>
            <div className='topbar-row'>
                <Link to='/list-room' className='nav-return'>
                    <MdOutlineArrowBackIos className='back-button' size={34} />
                </Link>
                <h1 className='title-about-room'>รายละเอียดข้อมูลห้อง</h1>
            </div>
            <div className="bill-container">
                <BillForm />
            </div>
        </div>
    );
};

export default MakeBill;
