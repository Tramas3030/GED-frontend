import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 3.2rem;

  display: flex;
`;

export const EmptyHomeContainer = styled.div`
  width: 60rem;
  height: 30rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  
  text-align: center;
  justify-content: center;

  background-color: ${props => props.theme["purple-500"]};
  color: ${props => props.theme.gray};

  strong, p {
    font-size: 2.4rem;
    color: ${props => props.theme.gray};
  }
`;

export const GroupsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 2.4rem;

  tr {
    cursor: pointer;
  }

  tr:hover {
    filter: brightness(1.4);
  }

  td {
    padding: 2.4rem 3.2rem;
    background-color: ${props => props.theme["purple-900"]};
  }
`;