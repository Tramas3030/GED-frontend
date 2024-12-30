// import { EmptyHomeContainer, LayoutContainer } from "./styles";

import { GroupsTable, LayoutContainer } from "./styles";

export function Home() {
  return(
    <LayoutContainer>
      {/* <EmptyHomeContainer>
        <strong>You don't belong to any group yet</strong>
        <p>To get started, you can join an existing group or create your own.</p>
      </EmptyHomeContainer> */}

        <GroupsTable>
          <tbody>
            <tr>
              <td>Group A</td>
            </tr>

            <tr>
              <td>Group B</td>
            </tr>

            <tr>
              <td>Group C</td>
            </tr>

            <tr>
              <td>Group D</td>
            </tr>
          </tbody>
        </GroupsTable>

    </LayoutContainer>
  )
}