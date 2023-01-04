import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    width: 90%;
    text-align: left;
    font-size: 15px;
    margin-bottom: 5px;
  }

  input {
    width: 90%;
    padding: 0 12px;
    height: 35px;
    background-color: #fefefe;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    color: #616161;
    font-size: 13px;
    margin-bottom: 5px;

    ::placeholder {
      color: #b9b9b9;
      font-size: 11px;
    }

    &:focus {
      outline: none;
      border: 1px solid #006eff;
    }
  }
`;