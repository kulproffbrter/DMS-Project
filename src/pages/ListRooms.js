import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/pages css/ListRoom.css';
import ParentComponent from '../components/ParentComponent';
import { DataListroom } from '../components/DataListroom';
import { LuMailPlus } from 'react-icons/lu';
import { MdMarkEmailRead } from 'react-icons/md';

const ListRooms = () => {
  const data = DataListroom.getData();

  const [isMailBillPriceSent, setIsMailBillPriceSent] = useState(data.map(() => false));
  const [isMailBillUtilitySent, setIsMailBillUtilitySent] = useState(data.map(() => false));

  const handleMailIconColumnPriceClick = (index) => {
    const updatedIsMailBillPriceSent = [...isMailBillPriceSent];
    updatedIsMailBillPriceSent[index] = !updatedIsMailBillPriceSent[index];
    setIsMailBillPriceSent(updatedIsMailBillPriceSent);

    if (updatedIsMailBillPriceSent[index]) {
      const confirmSendBill = window.confirm('คุณต้องการส่งข้อมูล "บิลราคาห้อง" ไปที่นักศึกษาใช่ไหม');
      if (confirmSendBill) {
        console.log('Sending bill...');
      } else {
        console.log('Send bill canceled.');
        updatedIsMailBillPriceSent[index] = false;
        setIsMailBillPriceSent(updatedIsMailBillPriceSent);
      }
    }
  };

  const handleMailIconColumnUtilityClick = (index) => {
    const updatedIsMailBillUtilitySent = [...isMailBillUtilitySent];
    updatedIsMailBillUtilitySent[index] = !updatedIsMailBillUtilitySent[index];
    setIsMailBillUtilitySent(updatedIsMailBillUtilitySent);

    if (updatedIsMailBillUtilitySent[index]) {
      const confirmSendBill = window.confirm('คุณต้องการส่งข้อมูล "บิลค่าน้ำค่าไฟ" ไปที่นักศึกษาใช่ไหม');
      if (confirmSendBill) {
        console.log('Sending bill...');
      } else {
        console.log('Send bill canceled.');
        updatedIsMailBillUtilitySent[index] = false;
        setIsMailBillUtilitySent(updatedIsMailBillUtilitySent);
      }
    }
  };


  return (
    <div className='page-listroom'>
      <div>
        <ParentComponent />
      </div>
      <div className='listroom-container'>
        <table className="info-table">
          <thead className='header'>
            <tr>
              <th>ชั้น</th>
              <th>ห้อง</th>
              <th>สมาชิก</th>
              <th>
                ราคาห้อง
              </th>
              <th>
                ค่าน้ำค่าไฟ
              </th>
              <th>สถานะ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className='text-field' key={item.floor}>
                <td>{item.floor}</td>
                <td><Link to="/list-room/make-bill">{item.roomNumber}</Link></td>
                <td>{item.quantity}</td>
                <td>
                  {item.roomPrice}
                  <div className='item-price-container' onClick={() => handleMailIconColumnPriceClick(index)} >
                    {isMailBillPriceSent[index] ? (
                      <MdMarkEmailRead />
                    ) : (
                      <LuMailPlus />

                    )}
                  </div>
                </td>
                <td>
                  {item.utility}
                  <div className='item-utility-container' onClick={() => handleMailIconColumnUtilityClick(index)}>
                    {isMailBillUtilitySent[index] ? (
                      <MdMarkEmailRead />
                    ) : (
                      <LuMailPlus />
                    )}
                  </div>
                </td>
                <td className={item.status === 'เสร็จสิ้น' ? 'green-text' : item.status === 'ยังไม่ชำระ' ? 'red-text' : ''}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRooms;