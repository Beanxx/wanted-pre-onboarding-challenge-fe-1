import styled from 'styled-components';

interface Props {
  height?: string;
  width?: string;
  radius?: string;
  borderR?: string;
  borderB?: string;
}

export const Btn = styled.button`
  width: 90%;
  height: 35px;
  padding: 0 20px;
  background-color: #006eff;
  border: none;
  border-radius: 5px;
  color: #fefefe;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  margin: 0 auto;
  cursor: pointer;

  &:disabled {
    background-color: #b8d7ff;
  }
`;

export const OutlinedBtn = styled(Btn)`
  background-color: #fefefe;
  color: #006eff;
  border: 1px solid #006eff;

  &:hover {
    background-color: #f0f6ff;
  }
`;

export const TabBtn = styled.button<Props>`
  background-color: var(--btn-color);
  height: ${(props) => props.height || "43px"};
  width: ${(props) => props.width || "100%"};
  border: none;
  border-bottom: 1px solid rgba(240, 246, 252, 0.1);
  border-bottom: ${(props) => props.borderB || "1px solid rgba(240, 246, 252, 0.1);"};
  border-right: ${(props) => props.borderR || "1px solid rgba(240, 246, 252, 0.1);"};
  border-radius: ${(props) => props.radius || "7px"};
  font-size: 13px;
  text-align: center;
  cursor: pointer;
`;