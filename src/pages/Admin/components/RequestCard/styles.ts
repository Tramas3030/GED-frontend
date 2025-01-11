import styled from "styled-components";

interface RequestsCardContainerProps {
  hasBorder: boolean;
}

export const RequestCardContainer = styled.div<RequestsCardContainerProps>`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 0.8rem;

  background-color: ${props => props.theme["purple-500"]};

  border-bottom: ${props => props.hasBorder ? `1px solid ${props.theme["purple-900"]}` : "none"};
`;

export const AcceptOrDenyButtonsDivContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const ButtonsContainer = styled.button`
  border: none;
  background: none;

  padding: 1.2rem 1.6rem;
  background-color: ${props => props.theme.gray};
  color: ${props => props.theme["purple-900"]};

  border: 2px solid ${props => props.theme["purple-700"]};
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    transition: opacity 0.2s;
    opacity: 0.7;
  }
`;
