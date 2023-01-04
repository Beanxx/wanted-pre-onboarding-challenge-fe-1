import React, { useState } from "react";
import Form from "../../components/layouts/Form/Form";
import styled from "styled-components";
import Input from "../../components/UI/Input/Input";
import { Btn, TabBtn } from "../../components/UI/Button/Button";
import axios from "axios";

const index = () => {
  const [isTab, setIsTab] = useState<Number>(0);
  const TAB = [{ name: "LOGIN" }, { name: "SIGNUP" }];
  const [role, setRole] = useState("LOGIN");

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [pw, setPw] = useState("");
  const [pwTouched, setPwTouched] = useState(false);

  const emailIsValid = email.includes("@") && email.includes(".");
  const emailInputIsInvalid = !emailIsValid && emailTouched;

  const pwIsValid = pw.trim().length >= 8;
  const pwInputIsInvalid = !pwIsValid && pwTouched;

  let formIsValid = false;

  if (emailIsValid && pwIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const pwInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const emailInputBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailTouched(true);
  };

  const pwInputBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwTouched(true);
  };

  const formSubmissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailTouched(true);

    if (!emailIsValid) return;

    const body = {
      email: email,
      password: pw,
    };

    axios
      .post(`http://localhost:8080/users/create`, body)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));

    setEmail("");
    setEmailTouched(false);

    setPw("");
    setPwTouched(false);
  };

  const selectTabHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: Number
  ): void => {
    e.preventDefault();

    setIsTab(idx);

    if (idx === 0) setRole("LOGIN");
    else if (idx === 1) setRole("SIGNUP");
  };

  return (
    <Layout>
      <Form onSubmit={formSubmissionHandler}>
        <Tab>
          {TAB.map((item, idx) => (
            <TabBtn
              key={idx}
              className={`${isTab === idx ? "focused" : ""} `}
              radius={item.name === "LOGIN" ? "6px 0 0 0" : "0 6px 0 0"}
              borderR={item.name === "SIGNUP" ? "none" : ""}
              height="50px"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                selectTabHandler(e, idx)
              }
            >
              {item.name === "LOGIN" ? "로그인" : "회원가입"}
            </TabBtn>
          ))}
        </Tab>
        <Box>
          <Input
            id="email"
            type="email"
            value={email}
            onBlur={emailInputBlurHandler}
            onChange={emailInputChangeHandler}
            placeholder="이메일을 입력해주세요."
          >
            email
          </Input>
          {emailInputIsInvalid && <Error>@, .을 포함하여 작성해주세요.</Error>}
        </Box>
        <Box>
          <Input
            id="password"
            type="password"
            value={pw}
            onBlur={pwInputBlurHandler}
            onChange={pwInputChangeHandler}
            placeholder="비밀번호를 입력해주세요."
          >
            password
          </Input>
          {pwInputIsInvalid && <Error>8자 이상 작성해주세요.</Error>}
        </Box>
        {isTab ? (
          <Btn disabled={!formIsValid}>Signup</Btn>
        ) : (
          <Btn disabled={!formIsValid}>Login</Btn>
        )}
      </Form>
    </Layout>
  );
};

export default index;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tab = styled.div`
  width: 100%;
  display: flex;

  .focused {
    background-color: var(--btn-hover-color);
  }
`;

const Box = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: column;
`;

const Error = styled.div`
  color: #f00001;
  font-weight: 400;
  font-size: 11px;
  margin-left: 16px;
  text-align: left;
`;
