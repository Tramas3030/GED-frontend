import styled from "styled-components";

export const FormContainer = styled.form`
  width: 80%;
  
  display: flex;
  flex-direction: column;
  margin: 4.8rem auto;
  gap: 2.4rem;

  input {
    border: 0;
    border-radius: 6px;
    background-color: ${props => props.theme["purple-900"]};
    color: ${props => props.theme.white};

    font-size: 1.6rem;

    padding: 0 3.6rem;
    height: 7rem;
  }

  div {
    display: flex;
    gap: 4.4rem;
  }


`;

export const CategoryInputContainer = styled.input`
  flex: 1;
  height: 7rem;
`;