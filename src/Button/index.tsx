import { FC, HTMLAttributes, ReactNode } from "react";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
  color?: "white" | "black";
}

const Button: FC<Props> = ({
  children,
  backgroundColor = "lightblue",
  size = "md",
  color = "black",
  ...rest
}) => {
  const myRem = {
    sm: ".7rem",
    md: "1rem",
    lg: "1.3rem",
  };

  const styles = {
    backgroundColor,
    padding: myRem[size],
    borderRadius: myRem[size],
    border: "none",
    fontSize: myRem[size],
    color,
    cursor: "pointer",
  };

  return (
    <button style={styles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
