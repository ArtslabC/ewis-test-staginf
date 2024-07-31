import { ImSpinner2 } from "react-icons/im";

const FormButton = ({
  isProcessing = false,
  text,
  type = "submit",
  classes = "",
}) => {
  return (
    <button
      type={type}
      disabled={isProcessing}
      className={` ${
        isProcessing ? "bg-green-700" : "bg-primary"
      } px-5 h-12 rounded-2xl shadow-md text-white  text-sm  ${classes}`}
    >
      {isProcessing ? (
        <ImSpinner2 className="animate-spin mx-auto text-base" />
      ) : (
        `${text}`
      )}
    </button>
  );
};

export default FormButton;
