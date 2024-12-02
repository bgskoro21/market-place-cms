interface ButtonProps {
  className?: string;
  loading: boolean;
  type: "submit" | "button";
  label: string;
}

const Button: React.FC<ButtonProps> = ({ className, loading, type, label }) => {
  return (
    <button
      type={type}
      className={`w-full py-2 text-white font-semibold rounded-md duration-300 focus:outline-none focus:ring focus:ring-indigo-200 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-950"} ${className}`}
      disabled={loading}
    >
      {loading ? <span className="loading loading-dots loading-md"></span> : label}
    </button>
  );
};

export default Button;
