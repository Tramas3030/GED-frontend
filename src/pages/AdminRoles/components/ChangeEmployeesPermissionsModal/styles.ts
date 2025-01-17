import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.4rem 4.8rem;
  background: ${props => props.theme["purple-900"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  p, span {
    font-size: 1.6rem;
  }

  p {
    color: ${props => props.theme.gray};
  }

  span {
    color: red;
  }
`;

export const PermissionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .CheckboxRoot {
    background-color: ${props => props.theme.white};
    width: 25px;
    height: 25px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  .CheckboxRoot:focus {
    box-shadow: 0 0 0 2px ${props => props.theme.gray};
  }

  .CheckboxIndicator {
    color: ${props => props.theme["purple-900"]};
  }

  .Label {
    color: ${props => props.theme.gray};
    padding-left: 0.8rem;
    font-size: 1.6rem;
    line-height: 1;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const DialogButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;

  margin-top: 1.6rem;
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  
  cursor: pointer;

  color: ${props => props.theme.gray};
`;

export const ChangeButton = styled(Dialog.Close)`
  font-size: 1.6rem;

  padding: 1.6rem 3.2rem;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  background-color: ${props => props.theme["purple-700"]};   
  color: ${props => props.theme.gray};

  border: 1px solid #443C57;

  &:hover {
    transition: filter 0.2s;
    filter: brightness(1.4);
  }
`;

