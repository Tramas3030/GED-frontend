import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;
  background: none;

  background-color: ${props => props.theme["purple-500"]};
  color: ${props => props.theme.gray};

  height: 6.0rem;
  width: 40%;

  text-align: center;
  align-self: center;

  font-size: 1.6rem;

  border-radius: 6px;
  cursor: pointer;

  &:hover {
    transition: filter 0.2s;
    filter: brightness(1.3);
  }
`;