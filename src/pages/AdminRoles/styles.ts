import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 80%;
  height: auto;

  padding: 3.2rem;

  display: flex;
  margin: 0 auto;
`;

export const EmployeesTable = styled.table`
  width: 100%;

  text-align: center;

  border-collapse: collapse;

  tbody tr {
    height: 60px;
    border-top: 1px solid ${props => props.theme.gray};
    background-color: ${props => props.theme["purple-900"]};
  }
`;

export const EditPermissionsButtonContainer = styled.button`
  border: none;
  background: none;

  padding: 1.2rem 1.6rem;
  font-size: 1.6rem;

  background-color: ${props => props.theme["purple-700"]};
  color: ${props => props.theme.gray};

  border-radius: 6px;

  cursor: pointer;

  &:hover {
    transition: filter 0.2s;
    filter: brightness(1.4);
  }
`;