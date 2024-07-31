import { FiAlertTriangle } from "react-icons/fi";

const FormError = ({ message }) => {
  if (!message) {
    return <></>;
  }
  return (
    <div className="p-2 border border-red-300 text-red-500 mb-6 bg-red-200 flex gap-2 items-center">
      <FiAlertTriangle /> {message}
    </div>
  );
};

export default FormError;
