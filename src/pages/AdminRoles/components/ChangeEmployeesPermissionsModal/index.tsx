import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import { ChangeButton, CheckboxGroup, CloseButton, Content, DialogButtonsContainer, Overlay, PermissionsContainer } from "./styles";
import { Check, X } from "phosphor-react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useState } from "react";
import { apiGateway } from "../../../../lib/axios";

interface ChangeEmployeesPermissionsModalProps {
  companyId: string;
  empolyeeEmail: string;
  onPermissionsChanged?: () => void;
  currentPermissions: string[];
};


export function ChangeEmployeesPermissionsModal({ companyId, empolyeeEmail, onPermissionsChanged, currentPermissions }: ChangeEmployeesPermissionsModalProps) {
  const { token } = useAuth();
  const [permissions, setPermissions] = useState<string[]>(() => {
    return currentPermissions;
  });

  function handlePermissionsChange(permission: string, checked: boolean) {
    setPermissions(prevPermissions => {
      if(checked) {
        return [... new Set([...prevPermissions, permission])];
      } else {
        if(permission === "READ") {
          return prevPermissions;
        }
        return prevPermissions.filter(p => p !== permission);
      };
    });
  };

  async function handleChangePermissions() {
    try {
      const finalPermissions = Array.from(new Set(["READ", ...permissions]));

      await apiGateway.put(`/v1/api/company/${companyId}/members/${empolyeeEmail}/permissions`,
        {
          permissions: finalPermissions,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onPermissionsChanged?.();
    } catch (error) {
      console.log("Error changing employee permissions: ", error);
    }
  };

  return(
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={16}/>
        </CloseButton>

        <Dialog.Title>
          <p>Select the permissions you want to give to this employee</p>
        </Dialog.Title>

        <PermissionsContainer>
          <CheckboxGroup>
            <Checkbox.Root 
              className="CheckboxRoot" 
              id="upload"
              checked={permissions.includes("UPLOAD")}
              onCheckedChange={(checked) => handlePermissionsChange("UPLOAD", checked as boolean)}
            >
              <Checkbox.Indicator className="CheckboxIndicator">
                <Check size={16}/>
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="Label" htmlFor="upload">
              Upload documents
            </label>
          </CheckboxGroup>
          
          <CheckboxGroup>
            <Checkbox.Root 
              className="CheckboxRoot" 
              id="grant-permissions"
              checked={permissions.includes("GRANT_PERMISSIONS")}
              onCheckedChange={(checked) => handlePermissionsChange("GRANT_PERMISSIONS", checked as boolean)}
            >
              <Checkbox.Indicator className="CheckboxIndicator">
                <Check size={16}/>
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="Label" htmlFor="grant-permissions">
              Change an employee's permissions
            </label>
          </CheckboxGroup>

          <CheckboxGroup>
            <Checkbox.Root 
              className="CheckboxRoot" 
              id="manage-employees-requests"
              checked={permissions.includes("MANAGE_USERS")}
              onCheckedChange={(checked) => handlePermissionsChange("MANAGE_USERS", checked as boolean)}
            >
              <Checkbox.Indicator className="CheckboxIndicator">
                <Check size={16}/>
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="Label" htmlFor="manage-employees-requests">
              Manage employees requests
            </label>
          </CheckboxGroup>

        </PermissionsContainer>

        <DialogButtonsContainer>
          <ChangeButton onClick={handleChangePermissions}>Change</ChangeButton>
        </DialogButtonsContainer>
      </Content>
    </Dialog.Portal>
  )
}