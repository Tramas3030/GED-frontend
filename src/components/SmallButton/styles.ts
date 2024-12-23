import styled from "styled-components";

interface ButtonContainerProps {
  variant: 'create' | 'join';
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: none;
  background: none;

  width: 9rem;
  height: 4.2rem;
  
  border-radius: 6px;
  
  font-size: 1.6rem;

  background-color: ${props => props.variant === 'create' ? props.theme["purple-500"] : 'transparent'};
  color: ${props => props.theme.gray};
  
  border: 1px solid ${props => props.theme["purple-500"]};
  
  cursor: pointer;

  &:hover {
    transition: filter 0.2s;
    filter: brightness(1.3);
  }
`;