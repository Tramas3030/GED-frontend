import { TagContainer } from "./styles";

interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return(
    <TagContainer>
      {text}
    </TagContainer>
  )
}