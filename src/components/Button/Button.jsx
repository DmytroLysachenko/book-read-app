export const Button = ({ type, children, width, padding }) => {
  return (
    <button
      className="bg-orangeBtn text-white font-semibold"
      type={type}
      style={{ width, padding }}
    >
      {children}
    </button>
  );
};
