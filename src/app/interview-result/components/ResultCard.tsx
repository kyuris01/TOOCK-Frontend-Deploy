import React from "react";

interface Props {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

const ResultCard = ({ title, subtitle, content }: Props) => {
  return (
    <div className="flex flex-col justify-start items-start gap-3 w-full p-3 bg-blue-1 rounded-md text-blue-950">
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm font-normal">{subtitle}</div>
      </div>
      <div className="flex flex-col items-center justify-start w-full">{content}</div>
    </div>
  );
};

export default ResultCard;
