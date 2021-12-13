import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

export const MutedLink = styled.a`
  font-size: 13px;
  color: black;
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 13px;
  color: rgb(103 186 50);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;

`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: none;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  margin-top:10px;

  &::placeholder {
    color: black;
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.input`
  width: 101%;
  padding: 11px 40%;
  margin-top: 20px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none !important;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgb(15 72 241) 20%,
    rgb(15 72 241) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;
