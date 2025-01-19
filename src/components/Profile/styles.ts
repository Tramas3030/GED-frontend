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
`;

export const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-color: ${props => props.theme.gray};
  color: ${props => props.theme["purple-900"]};

  display: flex;
  justify-content: center;
  align-items: center;
`;