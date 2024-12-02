interface StatusIconProps {
  status: "success" | "info" | "error";
  className?: string;
}

const StatusIcon: React.FC<StatusIconProps> = ({ status, className = "h-6 2-6" }) => {
  const icons = {
    success: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m-6 6a9 9 0 110-18 9 9 0 010 18z" />,
    info: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 20.5c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9-4.029 9-9 9z" />,
    error: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`shrink-0 stroke-current ${className}`} fill="none" viewBox="0 0 24 24">
      {icons[status]}
    </svg>
  );
};

export default StatusIcon;
