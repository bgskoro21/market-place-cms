import StatusIcon from "./StatusIcon";

interface AlertProps {
  status: "info" | "success" | "error";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ status, message }) => {
  return (
    <div role="alert" className={`alert alert-${status}`}>
      <StatusIcon status={status} />
      <span>{message}</span>
    </div>
  );
};

export default Alert;
