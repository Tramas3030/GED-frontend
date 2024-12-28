import styled from "styled-components";

export const FormInputContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  gap: .6rem;

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    svg {
      position: absolute;
      left: 1.6rem;
      color: ${props => props.theme.white};
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 7.2rem;
  
  padding-left: 4.8rem;

  border: 0;
  border-radius: 6px;

  font-size: 1.6rem;

  background-color: ${props => props.theme["purple-500"]};
  color: ${props => props.theme.white};

  &::placeholder {
    font-size: 1.6rem;
    color: ${props => props.theme.white};
  }
`;

export const Label = styled.label`
  font-size: 1.6rem;
`;