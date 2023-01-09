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
  const setDate = (a: string, b: string) => {
    if (a !== b) {
      return `${moment(b).format("YYYY년 MMMM Do, HH:mm")} (수정됨)`;
    } else {
      return moment(a).format("YYYY년 MMMM Do, HH:mm");
    }
  };

  const onDelete = () => {
    deleteTodoHanlder(data[0]?.id);
  };

  return (
    <S.Layout>
      <S.Box>
        <S.Label>Title</S.Label>
        <S.Output>{data[0]?.title}</S.Output>
      </S.Box>
      <S.Box>
        <S.Label>Date</S.Label>
        <S.Output>{setDate(data[0]?.createdAt, data[0]?.updatedAt)}</S.Output>
      </S.Box>
      <S.Box>
        <S.Label>Content</S.Label>
        <S.Output>{data[0]?.content}</S.Output>
      </S.Box>

      <Btn type="button" onClick={onDelete}>
        Delete
      </Btn>
    </S.Layout>
  );
};

export default TodoEditor;
