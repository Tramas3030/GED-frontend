import { ButtonContainer } from "./styles";

interface SmallButtonProps {
  text: string;
}

export function SmallButton({ text }: SmallButtonProps) {
  return(
    <ButtonContainer variant={text.toLowerCase() as 'create' | 'join'}>{text}</ButtonContainer>
  )
}