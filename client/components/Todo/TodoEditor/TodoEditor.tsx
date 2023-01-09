import React from "react";
import * as S from "./TodoEditor.styles";
import { TodoType } from "../../../types/todo.interface";
import { Btn } from "../../UI/Button/Button";

const TodoEditor: React.FC<{
  data: TodoType[];
  deleteTodoHanlder: (id: string) => void;
}> = ({ data, deleteTodoHanlder }) => {
  const onDelete = () => {
    deleteTodoHanlder(data[0]?.id);
  };

  return (
    <S.Layout>
      <div>{data[0]?.title}</div>
      <div>{data[0]?.content}</div>
      <div>{data[0]?.createdAt.toString()}</div>
      <div>{data[0]?.updatedAt}</div>
      <Btn type="button" onClick={onDelete}>
        Delete
      </Btn>
    </S.Layout>
  );
};

export default TodoEditor;
