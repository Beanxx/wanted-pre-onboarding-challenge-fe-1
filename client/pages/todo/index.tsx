import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoEditor from "../../components/Todo/TodoEditor/TodoEditor";
import TodoList from "../../components/Todo/TodoList/TodoList";
import axios from "axios";
import { getTodos, postTodo } from "../../components/apis/api";

const index = () => {
  const [data, setData] = useState([]);

  const getTodosHandler = () => {
    getTodos()
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postTodoHandler = (title: string, content: string) => {
    postTodo(title, content)
      .then((response) => {
        getTodosHandler();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTodosHandler();
  }, []);

  return (
    <Layout>
      <h1>Todo</h1>
      <Container>
        <TodoEditor postTodoHandler={postTodoHandler} />
        <TodoList data={data} />
      </Container>
    </Layout>
  );
};

export default index;

const Layout = styled.div`
  height: calc(100vh - 50px);
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Container = styled.div`
  width: 90%;
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
`;
