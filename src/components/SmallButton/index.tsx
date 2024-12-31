import { useNavigate } from "react-router-dom";

import { ButtonContainer } from "./styles";

interface SmallButtonProps {
  text: string;
}

export function SmallButton({ text }: SmallButtonProps) {
  const navigate = useNavigate();

  function handleClick() {
    const route = text.toLowerCase();
    navigate(`${route}`);
  }

  return(
    <ButtonContainer 
      variant={text.toLowerCase() as 'create' | 'join'}
      onClick={handleClick}
    >
      {text}
    </ButtonContainer>
  )
}