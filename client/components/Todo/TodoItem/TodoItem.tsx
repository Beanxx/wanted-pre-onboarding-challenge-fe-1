import React from "react";
import * as S from "./TodoItem.styles";
import { TodoType } from "../../types/todo.interface";

const TodoItem: React.FC<{ data: TodoType }> = ({ data }) => {
  return (
    <S.Layout>
      <div>{data.title}</div>
    </S.Layout>
  );
};

export default TodoItem;
