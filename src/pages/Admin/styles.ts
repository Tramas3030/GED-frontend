import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 80%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin: 3.2rem auto;

  background-color: ${props => props.theme["purple-900"]};
`;

export const PendingRequestsContainer = styled.section`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1.6rem;

  div {
    display: flex;
    gap: 0.8rem;
  }

  .pendingRequests {
    font-size: 2.4rem;
    color: ${props => props.theme.gray};
  }
`;

export const PendingRequestsCounterContainer = styled.span`
  padding: 0.8rem 1.6rem;

  border-radius: 9999px;
  
  color: ${props => props.theme.gray};
  background-color: ${props => props.theme["purple-500"]};

  font-size: 1.6rem;
`;

export const RequestsContainer = styled.main`
  width: 100%;
  height: auto;
`;

export const ZeroPendingRequestsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.2rem;

  padding: 3.6rem 0;

  background-color: ${props => props.theme.gray};
  color: ${props => props.theme["purple-900"]};

  strong {
    font-size: 2.4rem;
  }
`;