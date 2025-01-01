import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const SearchFormAndButtonContainer = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

export const ButtonContainer = styled.button`
  height: 6.0rem;

  padding: 1.6rem 3.2rem;

  font-size: 1.6rem;

  background-color: ${props => props.theme["purple-500"]};
  color: ${props => props.theme.gray};

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    transition: filter 0.2s;
    filter: brightness(1.3);
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

  svg:hover {
    color: red;
  }

  .textPreview {
    max-width: 50rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;