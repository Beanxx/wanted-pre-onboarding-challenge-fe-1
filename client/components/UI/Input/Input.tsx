import React from "react";
import * as S from "./Input.styles";

interface Props {
  children?: React.ReactNode;
  id?: string;
  value?: string;
  placeholder?: string;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  style?: object;
}

const Input: React.FC<Props> = (props) => {
  return (
    <S.Container>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        id={props.id}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </S.Container>
  );
};

export default Input;
