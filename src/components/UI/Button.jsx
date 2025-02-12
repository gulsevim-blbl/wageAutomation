const Button = (props) => {
  return (
    <button
      className={`p-2 text-lg 
        rounded-[2vw]
    bg-linear-to-r/oklch from-indigo-500 to-teal-400
    text-white ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
