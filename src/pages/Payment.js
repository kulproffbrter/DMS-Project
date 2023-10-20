import './pages css/PaymentNoti.css';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { BsCheck2Circle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import NotificationsBox from '../components/NotificationBox';

const Payment = () => {
    return (
        <div className='payment-container'>

            <div className='topbar-row'>
                <Link to='/' className='nav-return'>
                    <MdOutlineArrowBackIos className='back-button' size={34} />
                </Link>
                <h1 className='title-2'>แจ้งการชำระเงิน</h1>
            </div>
            <div className="payment-column">
                <div className="messagebox">
                    <NotificationsBox icon={<BsCheck2Circle size={18} />} studentName="กุลปริยา สุริยานนท์" text="ได้ชำระค่าประกันหอพักแล้ว" price="1000" />
                </div>
            </div>
        </div>
    );
};
export default Payment;