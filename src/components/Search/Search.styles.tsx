import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 25rem; /* 400px */
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.625rem; /* 10px */
  font-size: 1.25rem; /* 20px */

  div {
    padding: 3rem;
    height: 100%;
  }

  p {
    text-align: center;
    line-height: 1.5237rem; /* 24.38px */
  }

  input {
    width: 100%;
    text-align: center;
    height: 2.5rem; /* 40px */
    border-radius: 0.3125rem; /* 5px */
    border: none;
    margin-top: 1.5rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5rem; /* 40px */
  border-radius: 0.3125rem; /* 5px */
  margin-top: 7px;
  background-color: #de1212;
  color: #fff;
  border: none;
  gap: 0.625rem; /* 10px */
`;
