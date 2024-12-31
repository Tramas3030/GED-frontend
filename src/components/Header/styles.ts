import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 3.2rem;

  background-color: ${props => props.theme["purple-900"]};
`;

export const HeaderText = styled.h1`
  font-size: 3.2rem;
  color: ${props => props.theme.gray};

  cursor: pointer;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1.4rem;
`;