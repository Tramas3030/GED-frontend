import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import { ChangeButton, CheckboxGroup, CloseButton, Content, DialogButtonsContainer, Overlay, PermissionsContainer } from "./styles";
import { Check, X } from "phosphor-react";

export function ChangeEmployeesPermissionsModal() {
  return(
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={16}/>
        </CloseButton>

        <Dialog.Description>
          <p>Select the permissions you want to give to this employee</p>
        </Dialog.Description>

        <PermissionsContainer>
          <CheckboxGroup>
            <Checkbox.Root className="CheckboxRoot" id="c1">
              <Checkbox.Indicator className="CheckboxIndicator">
                <Check size={16}/>
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="Label" htmlFor="c1">
              Upload documents
            </label>
          </CheckboxGroup>
          
          <CheckboxGroup>
            <Checkbox.Root className="CheckboxRoot" id="c2">
              <Checkbox.Indicator className="CheckboxIndicator">
                <Check size={16}/>
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="Label" htmlFor="c3">
              Change an employee's permissions
            </label>
          </CheckboxGroup>

          <CheckboxGroup>
            <Checkbox.Root className="CheckboxRoot" id="c3">
              <Checkbox.Indicator className="CheckboxIndicator">
                <Check size={16}/>
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="Label" htmlFor="c3">
              Manage employees requests
            </label>
          </CheckboxGroup>

        </PermissionsContainer>

        <DialogButtonsContainer>
          <ChangeButton>Change</ChangeButton>
        </DialogButtonsContainer>
      </Content>
    </Dialog.Portal>
  )
}