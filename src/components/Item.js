

const Item = ({ icon, text }) => {
  return (
    <button className="item">
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default Item;
