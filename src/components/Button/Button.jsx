export const Button = ({ type, children, width, padding }) => {
  return (
    <button
      className="bg-orangeBtn text-white"
      type={type}
      style={{ width, padding }}
    >
      {children}
    </button>
  );
};
