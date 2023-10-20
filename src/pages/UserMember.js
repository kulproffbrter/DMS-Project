//หน้าย่อยของ Total Rooms
import './pages css/UserMember.css';
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom';


const UserMemberBox = ({ studentId, name, faculty, department }) => {
    return (

        <button className="usermember-box">
            <div>{studentId}</div>
            <div>{name}</div>
            <div>{faculty}</div>
            <div>{department}</div>
        </button>

    );
};

const UserMember = () => {
    return (
        <div className='userMember-container'>
            <div className='topbar-row-userMember'>
                <Link to='/' className='nav-return'>
                    <MdOutlineArrowBackIos className='back-button' size={34} />
                </Link>
                <h1 className='title-userMember'>สมาชิกในห้อง 201</h1>
            </div>
            <div className='container-widget'>
                <div className='usermember-box-container'>
                    <div>
                        <UserMemberBox studentId={"651103580"} name={"กุลปริยา สุริยานนท์"} faculty={"คณะเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"} department={"สาขาเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"} />
                    </div>
                    <div>
                        <UserMemberBox studentId={"651103580"} name={"กุลปริยา สุริยานนท์"} faculty={"คณะเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"} department={"สาขาเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"} />
                    </div>
                    <div>
                        <UserMemberBox studentId={"651103580"} name={"กุลปริยา สุริยานนท์"} faculty={"คณะเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"} department={"สาขาเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"} />
                    </div>
                    <div>
                        <UserMemberBox studentId={"651103580"} name={"กุลปริยา สุริยานนท์"} faculty={"คณะเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"} department={"สาขาเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล"} />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default UserMember;
