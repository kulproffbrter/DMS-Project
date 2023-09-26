import './pages css/StudentList.css';
import SearchBox from '../components/Searchbox';
import React, { useEffect, useState } from 'react';


const StudentList = () => {
  // Sample data for demonstration
  const data = [
    { id: 1, name: 'John Doe', faculty: 'Engineering', department: 'Computer Science', phoneNumber: '123-456-7890', room: '225' },
    { id: 2, name: 'Jane Smith', faculty: 'Science', department: 'Physics', phoneNumber: '987-654-3210', room: '208' },
    // Add more data as needed
  ];

  return (
    <div className='page-content'>
      <div>
        <SearchBox />
      </div>
      <div className='datalist-container'>
        <table className="student-table">
          <thead>
            <tr>
              <th>รหัสนักศึกษา</th>
              <th>ชื่อ-นามสกุล</th>
              <th>คณะ</th>
              <th>สาขา</th>
              <th>เบอร์โทรศัพท์</th>
              <th>ห้อง</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className='text-table' key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.faculty}</td>
                <td>{item.department}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
