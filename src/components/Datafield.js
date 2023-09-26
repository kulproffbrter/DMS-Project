import React from 'react'

const Datafield = ({ id, studentName }) => {
    return (
        < div className='field-bar'>
            <span>{id}</span>
            <span>{studentName}</span>
        </div >

    );
};

export default Datafield;
