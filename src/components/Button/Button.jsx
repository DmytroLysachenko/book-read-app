export const Button = ({ type, children, width, padding, margin }) => {
  return (
    <button
      className="bg-orangeBtn text-white font-semibold block"
      type={type}
      style={{ width, padding, margin }}
    >
      {children}
    </button>
  );
};
