import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: auto;
  
  display: flex;
  margin: 3.2rem auto;
  padding: 1.6rem 3.2rem;
  flex-direction: column;
  gap: 3.2rem;

  background-color: ${props => props.theme["purple-900"]};
`;

export const TitleAndDownloadButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

export const UpdatedAndCreatedByContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2.4rem;
`;

export const TagsContainer = styled.div`
  width: 100%;
  
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;