import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Btn } from "../components/UI/Button/Button";

export default function Home() {
  return (
    <Layout>
      <h1>Main Page</h1>
      <Link href="/todo">
        <div>
          <Btn>Todo List</Btn>
        </div>
      </Link>
    </Layout>
  );
}

const Layout = styled.div`
  height: calc(100vh - 50px);
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  div {
    width: 300px;
    margin: 0 auto;
  }
`;
