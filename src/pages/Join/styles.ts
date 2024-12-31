import styled from "styled-components";

export const FormContainer = styled.form`
  width: 60rem;
  height: 42rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  padding: 1.6rem;
  
  background-color: ${props => props.theme["purple-900"]};

  h1 {
    text-align: center;
    font-size: 3.2rem;
    color: ${props => props.theme.gray};    
  }
`;