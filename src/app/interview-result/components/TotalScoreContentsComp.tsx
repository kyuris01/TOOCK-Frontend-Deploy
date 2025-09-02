import React from "react";

interface Props {
  data: number;
}

const TotalScoreContentsComp = ({ data }: Props) => {
  return <div>{data}/10 우수</div>;
};

export default TotalScoreContentsComp;
