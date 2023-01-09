import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoPost from "../../components/Todo/TodoPost/TodoPost";
import TodoList from "../../components/Todo/TodoList/TodoList";
import { getTodos, getTodo, postTodo, deleteTodo } from "../../apis/api";
import TodoEditor from "../../components/Todo/TodoEditor/TodoEditor";
import { TodoType } from "../../types/todo.interface";

const index = () => {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState<TodoType[]>([]);

  const getTodosHandler = async () => {
    await getTodos()
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTodoHandler = async (id: string) => {
    await getTodo(id)
      .then((response) => {
        setDetailData([response.data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postTodoHandler = async (title: string, content: string) => {
    await postTodo(title, content)
      .then((response) => {
        getTodosHandler();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodoHanlder = async (id: string) => {
    await deleteTodo(id)
      .then((response) => {
        console.log(response.data);
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
        <div className="left_box">
          <TodoPost postTodoHandler={postTodoHandler} />
          <TodoEditor deleteTodoHanlder={deleteTodoHanlder} data={detailData} />
        </div>
        <div className="right_box">
          <TodoList data={data} getTodoHandler={getTodoHandler} />
        </div>
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
`;

const Container = styled.div`
  width: 90%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  .left_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .right_box {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
