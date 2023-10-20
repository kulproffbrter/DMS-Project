import './pages css/StudentReq.css';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Request from '../components/Request'



const StudentReq = () => {

    return (
        <div className="request-container">
            <div className="topbar-row">
                <Link to="/" className="nav-return">
                    <MdOutlineArrowBackIos className="back-button" size={34} />
                </Link>
                <h1 className='title-3'>คำร้องขอของนักศึกษา</h1>
            </div>
            <div className="request-bar">
                <div className="request-show">
                    <Request
                        name="กุลปริยา สุริยานนท์"
                        roomNumber="408"
                        typeReq="แจ้งซ่อม"
                        textReq="ก๊อกน้ำพัง"
                    />
                </div>
            </div>
        </div>
    );
};
export default StudentReq;
