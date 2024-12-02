import Link from "next/link";
import React from "react";
interface LinkAuthProps {
  title: string;
  linkTitle: string;
  to: string;
}

const LinkAuth: React.FC<LinkAuthProps> = ({ title, linkTitle, to }) => {
  return (
    <p className="text-center text-sm mt-3">
      {title}{" "}
      <Link href={to} className="text-blue-900 font-semibold">
        {linkTitle}
      </Link>
    </p>
  );
};

export default LinkAuth;
