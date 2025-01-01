import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 35%;

  input {
    width: 100%;
    padding: 1.6rem;
    
    font-size: 1.6rem;
    
    background-color: ${props => props.theme["purple-900"]};
    color: ${props => props.theme.gray};
    
    border: 0;
    border-radius: 6px;
  }
`;