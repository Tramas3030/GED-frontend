import { ButtonContainer } from "./styles";

interface MediumButtonProps {
  text: string;
};

export function MediumButton({ text }: MediumButtonProps) {
  return(
    <ButtonContainer type="submit">
      {text}
    </ButtonContainer>
  )
}