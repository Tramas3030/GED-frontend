import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 3.2rem;

  display: flex;
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