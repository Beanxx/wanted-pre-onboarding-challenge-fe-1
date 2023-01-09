import styled from "styled-components"

export const Layout = styled.form`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`


export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Label = styled.div`
  width: 90%;
  font-size: 15px;
  margin-bottom: 5px;
  text-align: left;
`

export const Output = styled.div`
  width: 90%;
  background-color: var(--side-bgc);
  border-radius: 7px;
  padding: 10px;
  border: 1px solid var(--border-color);
  text-align: left;
  font-size: 13px;
`

export const BtnBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`