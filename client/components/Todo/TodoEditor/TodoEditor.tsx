import React from "react";
import * as S from "./TodoEditor.styles";
import { TodoType } from "../../../types/todo.interface";
import { Btn } from "../../UI/Button/Button";
import moment from "moment";
import "moment/locale/ko";

const TodoEditor: React.FC<{
  data: TodoType[];
  deleteTodoHanlder: (id: string) => void;
}> = ({ data, deleteTodoHanlder }) => {
  const onDelete = () => {
    deleteTodoHanlder(data[0]?.id);
  };

  const createdAt = moment(data[0]?.createdAt).format("YYYY년 MMMM Do, a h:mm");
  const updatedAt = moment(data[0]?.updatedAt).format("YYYY년 MMMM Do, a h:mm");

  return (
    <S.Layout>
      <div>{data[0]?.title}</div>
      <div>{data[0]?.content}</div>
      <div>{createdAt}</div>
      <div>{updatedAt}</div>
      <Btn type="button" onClick={onDelete}>
        Delete
      </Btn>
    </S.Layout>
  );
};

export default TodoEditor;
