import styled, { css } from "styled-components";

interface StyledProps {
  hasIcon: boolean;
};

export const FormInputContainer = styled.div<StyledProps>`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  gap: .6rem;

  .input-wrapper {
    ${props => props.hasIcon && css`
      position: relative;
      display: flex;
      align-items: center;
  
      svg {
        position: absolute;
        left: 1.6rem;
        color: ${props => props.theme.white};
      }
    `}
    
  }
`;

export const Input = styled.input<StyledProps>`
  width: 100%;
  height: 7.2rem;
  
  padding-left: ${props => props.hasIcon ? '4.8rem' : '1.6rem'};

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