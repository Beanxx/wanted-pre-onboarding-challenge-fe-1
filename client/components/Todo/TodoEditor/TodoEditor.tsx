import React, { useState } from "react";
import * as S from "./TodoEditor.styles";
import { TodoType } from "../../../types/todo.interface";
import { Btn } from "../../UI/Button/Button";
import moment from "moment";
import "moment/locale/ko";
import Input from "../../UI/Input/Input";

interface Props {
  data: TodoType[];
  deleteTodoHanlder: (id: string) => void;
  updateTodoHanlder: (id: string, title: string, content: string) => void;
}

const TodoEditor: React.FC<Props> = ({
  data,
  deleteTodoHanlder,
  updateTodoHanlder,
}) => {
  const [editTitle, setEditTitle] = useState(data[0]?.title);
  const [editContent, setEditContent] = useState(data[0]?.content);

  const [isEdit, setIsEdit] = useState(false);

  const handleEditMode = () => {
    setIsEdit(true);
  };

  const cancelEditMode = () => {
    setIsEdit(false);
    setEditTitle(data[0]?.title);
    setEditContent(data[0]?.content);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  };

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

  const onUpdate = () => {
    updateTodoHanlder(data[0]?.id, editTitle, editContent);
    setIsEdit(false);
  };

  return (
    <S.Layout>
      <S.Box>
        <S.Label>Title</S.Label>

        {isEdit ? (
          <Input
            id="title"
            type="text"
            value={editTitle}
            onChange={onChangeTitle}
          />
        ) : (
          <S.Output>{data[0]?.title}</S.Output>
        )}
      </S.Box>
      <S.Box>
        <S.Label>Date</S.Label>
        <S.Output>{setDate(data[0]?.createdAt, data[0]?.updatedAt)}</S.Output>
      </S.Box>
      <S.Box>
        <S.Label>Content</S.Label>
        {isEdit ? (
          <Input
            id="content"
            type="text"
            value={editContent}
            onChange={onChangeContent}
          />
        ) : (
          <S.Output>{data[0]?.content}</S.Output>
        )}
      </S.Box>

      <S.BtnBox>
        {isEdit ? (
          <>
            <div>
              <Btn type="button" onClick={cancelEditMode}>
                Cancel
              </Btn>
            </div>
            <div>
              <Btn type="button" onClick={onUpdate}>
                Update
              </Btn>
            </div>
          </>
        ) : (
          <>
            <div>
              <Btn type="button" onClick={onDelete}>
                Delete
              </Btn>
            </div>
            <div>
              <Btn type="button" onClick={handleEditMode}>
                Edit
              </Btn>
            </div>
          </>
        )}
      </S.BtnBox>
    </S.Layout>
  );
};

export default TodoEditor;
