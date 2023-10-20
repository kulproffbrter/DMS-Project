import { BsBorderAll } from 'react-icons/bs';
import { MdOutlinePayment, MdOutlineReportGmailerrorred } from 'react-icons/md'
import Item from '../components/Item';
import './pages css/Dashboard.css';
import { Link } from 'react-router-dom';


const Dashboard = () => {

    return (
        <div className="component-container">

            <div className="column">
                <div className="box-1">
                    <Link to='/dashboard/total-rooms' className='nav-link'>
                        <Item icon={<BsBorderAll size={14} />} text="จำนวนห้องทั้งหมด" />
                    </Link>
                </div>
            </div>

            <div className="column">
                <div className="box-1">
                    <Link to='/dashboard/payment-notifications' className='nav-link'>
                        <Item icon={<MdOutlinePayment size={20} />} text="แจ้งการชำระเงิน" />
                    </Link>
                </div>
            </div>

            <div className="column">
                <div className="box-2">
                    <Link to='/dashboard/student-request' className='nav-link'>
                        <Item icon={<MdOutlineReportGmailerrorred size={20} />} text="คำขอของนักศึกษา" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;