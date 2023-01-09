import React from "react";
import * as S from "./TodoList.styles";
import TodoItem from "../TodoItem/TodoItem";
import { TodoType } from "../../../types/todo.interface";

const TodoList: React.FC<{
  data: TodoType[];
  getTodoHandler: (id: string) => void;
}> = ({ data, getTodoHandler }) => {
  return (
    <S.Layout>
      {data.map((el) => (
        <TodoItem key={el.id} data={el} getTodoHandler={getTodoHandler} />
      ))}
    </S.Layout>
  );
};

export default TodoList;
