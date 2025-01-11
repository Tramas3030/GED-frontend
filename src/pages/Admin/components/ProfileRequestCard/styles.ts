import styled from "styled-components";

export const ProfileRequestCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

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

export const NameAndEmailContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;

  span {
    font-size: 1.6rem;
  }

  .Username {
    font-weight: bold;
  }
`;