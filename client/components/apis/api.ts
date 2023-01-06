import axios from "axios";

export const getTodos = () => {
  return axios
    .get(`http://localhost:8080/todos`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("Token")}`,
      },
    })
};

export const postTodo = (title: string, content: string) => {
  return axios
    .post(
      `http://localhost:8080/todos`,
      { title, content },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("Token")}`,
        },
      }
    )
};