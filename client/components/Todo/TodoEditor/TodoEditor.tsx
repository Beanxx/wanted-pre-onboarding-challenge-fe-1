import React from "react";
import * as S from "./TodoEditor.styles";
import { TodoType } from "../../../types/todo.interface";

const TodoEditor: React.FC<{
  data: TodoType[];
}> = ({ data }) => {
  return (
    <S.Layout>
      <div>{data[0]?.title}</div>
      <div>{data[0]?.content}</div>
      <div>{data[0]?.createdAt.toString()}</div>
      <div>{data[0]?.updatedAt}</div>
    </S.Layout>
  );
};

export default TodoEditor;
