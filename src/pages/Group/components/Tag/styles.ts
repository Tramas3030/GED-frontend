import styled from "styled-components";

export const TagContainer = styled.span`
  display: inline-block;

  width: 15.2rem;  
  padding: 1.6rem;

  text-align: center;
  font-size: 1.6rem;

  background-color: ${props => props.theme["purple-500"]};
  color: ${props => props.theme.gray};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;  