import React from "react";

interface Props {
  title: string;
  onClick?: () => void;
  laoding?: boolean;
  padding?: string;
  noIcon?: boolean;
}

const Button = ({ title }: Props) => {
  return <button className=""></button>;
};

export default Button;
