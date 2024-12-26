import styled from "styled-components";

export const Container = styled.div`
  width: 80%;

  height: auto;

  background-color: ${props => props.theme["purple-900"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormContainer = styled.form`
  padding: 1.6rem;
  
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input {
    width: 100%;
    height: 4.8rem;

    background-color: ${props => props.theme.gray};
  }
`;