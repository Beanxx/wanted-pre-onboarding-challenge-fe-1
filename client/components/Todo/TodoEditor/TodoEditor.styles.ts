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
  width: 90%; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Label = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
`

export const Output = styled.div`
  width: 100%;
  background-color: var(--side-bgc);
  border-radius: 7px;
  padding: 10px;
  border: 1px solid var(--border-color);
  text-align: left;
  font-size: 13px;
`