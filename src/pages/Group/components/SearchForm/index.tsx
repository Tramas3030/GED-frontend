import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";

interface SearchFormProps {
  onSearch: (search: string) => void;
};

interface SearchFormData {
  search: string;
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const { register, watch } = useForm<SearchFormData>({
    defaultValues: {
      search: "",
    }
  });

  watch("search");
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    onSearch(event.target.value);
  };

  return(
    <SearchFormContainer>
      <input 
        type="text" 
        placeholder="Search document"
        {...register('search')}
        onChange={handleSearchChange}
      />
    </SearchFormContainer>
  )
}