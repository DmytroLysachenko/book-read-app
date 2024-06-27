export const Backdrop = ({ children }) => {
  return (
    <div className="fixed h-screen w-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-backdrop flex justify-center items-center">
      {children}
    </div>
  );
};
