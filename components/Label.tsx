interface LabelProps {
  htmlFor: string;
  className?: string;
  title: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, className, title }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-bold text-gray-700 mb-3 ${className}`}>
      {title}
    </label>
  );
};

export default Label;
