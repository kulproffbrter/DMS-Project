

const Item = ({ icon, text, onClick }) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="item" onClick={handleClick}>
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default Item;
