import React, { useState } from 'react';

const Request = ({ name, roomNumber, typeReq, textReq }) => {

    const [selectedStatusReq, setSelectedStatusReq] = useState('');
    const handleStatusReqChange = (event) => {
        setSelectedStatusReq(event.target.value);
    };

    const statusReq = [
        { labelStatus: 'รับเรื่องแล้ว', className: 'option-red', icon: '🔴' },
        { labelStatus: 'กำลังดำเนินการภายในวันนี้', className: 'option-yellow', icon: '🟡' },
        { labelStatus: 'เสร็จสิ้น', className: 'option-green', icon: '🟢' },
    ];

    return (
        <button className='request-Box'>
            <div className="student-name">{name}</div>
            <div className="roomNum">{roomNumber}</div>
            <div className="message-show">
                <span className="type-req">{typeReq}</span>
            </div>
            <div className="message-show">
                <span className="text-req">{textReq}</span>
            </div>
            <div className='dropdown-request-container'>
                <select className='dropdown-statusReq' id="statusReqDropdown" value={selectedStatusReq} onChange={handleStatusReqChange}>
                    <option value="" disabled>สถานะการตอบกลับคำร้อง</option>
                    {statusReq.map((option) => (
                        <option key={option.labelStatus} value={option.labelStatus} className={option.className}>
                            {option.icon} {option.labelStatus}
                        </option>
                    ))}
                </select>
            </div>


        </button>
    );
};

export default Request;