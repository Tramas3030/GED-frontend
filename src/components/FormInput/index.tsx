import { ElementType, InputHTMLAttributes, forwardRef } from "react";
import { IconProps } from "phosphor-react";

import { FormInputContainer, Input, Label } from "./styles";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  inputText: string;
  icon?: ElementType<IconProps>;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ labelText, inputText, icon: Icon, ...props }, ref) => {
    return (
      <FormInputContainer>
        <Label htmlFor={props.id}>{labelText}</Label>
        
        <div className="input-wrapper">
          {Icon && <Icon size={20} />}
          
          <Input 
            ref={ref}
            type={props.type}
            id={props.id}
            placeholder={inputText}
            {...props}
          />
        </div>
      </FormInputContainer>
    );
  }
);