import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: 420px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  flex-direction: column;
  
  padding: 1.6rem;
  
  background-color: ${props => props.theme["purple-900"]};

  h1 {
    text-align: center;
    font-size: 3.2rem;
    color: ${props => props.theme.gray};    
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
    
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;