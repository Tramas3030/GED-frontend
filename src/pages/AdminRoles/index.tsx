import { EditPermissionsButtonContainer, EmployeesTable, LayoutContainer } from "./styles";

export function AdminRoles() {
  return(
    <LayoutContainer>
      <EmployeesTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>João Dantas</td>
            <td>Update, read</td>
            <td>
              <EditPermissionsButtonContainer>Editar permissões</EditPermissionsButtonContainer>
            </td>
          </tr>

          <tr>
            <td>Miguel Soares</td>
            <td>Read</td>
            <td>
              <EditPermissionsButtonContainer>Editar permissões</EditPermissionsButtonContainer>
            </td>
          </tr>

          <tr>
            <td>Lívia Maria</td>
            <td>Update, read</td>
            <td>
              <EditPermissionsButtonContainer>Editar permissões</EditPermissionsButtonContainer>
            </td>
          </tr>
        </tbody>
      </EmployeesTable>
    </LayoutContainer>
  )
}