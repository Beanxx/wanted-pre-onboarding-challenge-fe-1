import React from "react";
import Container from "./Form.styles";

interface Props {
  children: React.ReactNode;
  id?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = ({ children, onSubmit }) => {
  return <Container onSubmit={onSubmit}>{children}</Container>;
};

export default Form;
