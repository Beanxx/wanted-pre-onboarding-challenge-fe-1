import React from "react";
import * as S from "./TodoList.styles";
import TodoItem from "../TodoItem/TodoItem";
import { TodoType } from "../../../types/todo.interface";

interface Props {
  data: TodoType[];
  getTodoHandler: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ data, getTodoHandler }) => {
  return (
    <S.Layout>
      {data.map((el) => (
        <TodoItem key={el.id} data={el} getTodoHandler={getTodoHandler} />
      ))}
    </S.Layout>
  );
};

export default TodoList;
