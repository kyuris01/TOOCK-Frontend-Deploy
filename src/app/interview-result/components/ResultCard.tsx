import React from "react";

interface Props {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

const ResultCard = ({ title, subtitle, content }: Props) => {
  return (
    <div className="flex flex-col justify-start items-start gap-1 w-full p-3 bg-slate-400 rounded-md border">
      <div className="text-white text-lg font-semibold">{title}</div>
      <div className="text-sm font-normal">{subtitle}</div>
      <div className="w-full">{content}</div>
    </div>
  );
};

export default ResultCard;
