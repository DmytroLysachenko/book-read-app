export const Button = ({ type, children, padding, onClick, className }) => {
  return (
    <button
      className={'bg-orangeBtn text-white font-semibold block ' + className}
      type={type}
      style={{ padding }}
      onClick={() => {
        onClick;
      }}
    >
      {children}
    </button>
  );
};
