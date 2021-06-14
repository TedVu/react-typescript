import React from "react";

type ExampleProps = {
  text: string;
};

export const Example: React.FC<ExampleProps> = ({ text, children }) => {
  return <div>{text} </div>;
};
