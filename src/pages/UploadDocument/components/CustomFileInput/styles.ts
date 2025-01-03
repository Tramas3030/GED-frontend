import styled from "styled-components";

export const FileInputContainer = styled.div`
  position: relative;
  width: 40rem;
  height: 7rem;

  border-radius: 6px;

  &:focus-within {
    border: 2px solid ${props => props.theme.gray};
  }
`;

export const StyledLabel = styled.label`
  width: 100%;
  height: 100%;
  
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  
  background-color: ${props => props.theme["purple-900"]};
  cursor: pointer;

  /* &:focus {
    border: 1px solid ${props => props.theme.gray};
    outline: 1px solid ${props => props.theme.gray};
  } */
`;

export const HiddenFileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const PlaceholderText = styled.span`
  color: ${props => props.theme.white};
`;