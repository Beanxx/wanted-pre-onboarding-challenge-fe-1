import styled from "styled-components"

export const Layout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: var(--side-bgc);
  box-sizing: border-box;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`

export const Container = styled.div`
  max-width: 1200px;
  height: 50px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`