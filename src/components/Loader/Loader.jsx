import { FallingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <FallingLines
        color="orange"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};
