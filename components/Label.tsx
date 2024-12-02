interface LabelProps {
  htmlFor: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, className }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-bold text-gray-700 mb-3 ${className}`}>
      Email
    </label>
  );
};

export default Label;
