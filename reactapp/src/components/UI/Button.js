const Button = ({ btnName = children, onClick, marked, style }) => {
    return (
      <button onClick={onClick} disabled={marked} className={style}>
        {btnName}
      </button>
    );
  };
  
  export default Button;
  