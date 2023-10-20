
const NotificationsBox = ({ icon, studentName, text, price }) => {
    return (

        <button className="notifications-Box">
            <div className="student-name">{studentName}</div>
            <div className="message-show">
                <span className="text">{text}</span>
            </div>
            <div className="price">
                {price}
                <span style={{ marginLeft: '10px' }}>{icon}</span>
            </div>
        </button>
    );
};

export default NotificationsBox;