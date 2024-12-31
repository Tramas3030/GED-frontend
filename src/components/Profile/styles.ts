import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: auto;
  
  display: flex;
  gap: 1.6rem;

  align-items: center;

  color: ${props => props.theme.gray};

  span {
    font-size: 1.6rem;
  }

  img {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }
`;