import ArrowBtn from "./ArrowBtn";

const Button = ({ children, onClick }) => {
  return (
    <button className="inline-flex items-center my-3 py-1 px-3 text-sm font-medium text-center text-white bg-transparent rounded-lg focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800 border border-blue-100" onClick={onClick}>
      {children} <ArrowBtn />
    </button>
  );
}

export default Button;