import React from "react";
import * as S from "./TodoItem.styles";
import { TodoType } from "../../../types/todo.interface";

interface Props {
  data: TodoType;
  getTodoHandler: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ data, getTodoHandler }) => {
  const ongetTodo = () => {
    getTodoHandler(data.id);
  };

  return (
    <S.Layout onClick={ongetTodo}>
      <div>{data.title}</div>
    </S.Layout>
  );
};

export default TodoItem;
