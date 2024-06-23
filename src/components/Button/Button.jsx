export const Button = ({ type, children, width, padding, margin, onClick }) => {
  return (
    <button
      className="bg-orangeBtn text-white font-semibold block"
      type={type}
      style={{ width, padding, margin }}
      onClick={() => {
        onClick;
      }}
    >
      {children}
    </button>
  );
};
