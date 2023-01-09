import React, { useState } from "react";
import * as S from "./TodoPost.styles";
import { Btn } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import axios from "axios";
import { getTodos } from "../../../apis/api";

interface Props {
  postTodoHandler: (title: string, content: string) => void;
}

const TodoEditor: React.FC<Props> = ({ postTodoHandler }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postTodoHandler(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <S.Layout onSubmit={handleSubmit}>
      <div className="input_box">
        <Input
          id="title"
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="TODO 제목을 입력해주세요."
        >
          Title
        </Input>
      </div>
      <div className="input_box">
        <Input
          id="content"
          type="text"
          value={content}
          onChange={onChangeContent}
          placeholder="TODO 내용을 입력해주세요."
        >
          Content
        </Input>
      </div>
      <div className="btn_box">
        <Btn type="submit" width="90%">
          추가
        </Btn>
      </div>
    </S.Layout>
  );
};

export default TodoEditor;
