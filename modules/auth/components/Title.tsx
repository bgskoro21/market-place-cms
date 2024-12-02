import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className="text-center text-2xl font-semibold mb-6">{title}</h1>;
};

export default Title;
