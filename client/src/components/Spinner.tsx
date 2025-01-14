import { FiLoader } from "react-icons/fi";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <div
      role="status"
      className={`flex justify-center items-center ${className}`}
    >
      <FiLoader className="w-12 h-12 text-primary-blue animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
