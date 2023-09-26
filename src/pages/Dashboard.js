import { BsBorderAll, BsFillPersonCheckFill } from 'react-icons/bs';
import { MdOutlinePayment, MdOutlineReportGmailerrorred } from 'react-icons/md';
import Item from '../components/Item';
import './pages css/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="component-container">

            <div className="row">
                <div className="column">
                    <div className="box-1">
                        <Item icon={<BsBorderAll size={14} />} text="Total Rooms" />
                    </div>
                </div>
                <div className="column">
                    <div className="box-2">
                        <Item icon={<BsFillPersonCheckFill size={20} />} text="Registered" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="box-1">
                        <Item icon={<MdOutlinePayment size={20} />} text="Payment Notification" />
                    </div>
                </div>
                <div className="column">
                    <div className="box-2">
                        <Item icon={<MdOutlineReportGmailerrorred size={20} />} text="Student Request" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;


