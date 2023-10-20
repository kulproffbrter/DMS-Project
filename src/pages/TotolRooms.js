import './pages css/TotalRooms.css';
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom';
import RoomTableData from '../components/RoomTableData';


const TotalRooms = () => {
    return (
        <div className='totalroom-container'>
            <div className='topbar-row'>
                <Link to='/' className='nav-return'>
                    <MdOutlineArrowBackIos className='back-button' size={34} />
                </Link>
                <h1 className='title-1'>จำนวนห้องทั้งหมด</h1>
            </div>
            <div>
                <RoomTableData />
            </div>

        </div>
    );
};
export default TotalRooms;
