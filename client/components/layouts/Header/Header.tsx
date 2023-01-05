import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as S from "./Header.styles";
import { Btn } from "../../UI/Button/Button";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../../store/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("Token")!;
    if (token) dispatch(login());
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("Token");
    dispatch(logout());
    alert("로그아웃 되었습니다.");
    router.push("/auth");
  };

  return (
    <S.Layout>
      <S.Container>
        {isLogin ? (
          <div>
            <Btn onClick={handleLogOut}>LogOut</Btn>
          </div>
        ) : (
          <div>
            <Btn onClick={() => router.push("/auth")}>LogIn</Btn>
          </div>
        )}
      </S.Container>
    </S.Layout>
  );
};

export default Header;
