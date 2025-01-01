import { useNavigate } from "react-router-dom";

import { Tag } from "./components/Tag";
import { ButtonContainer, GroupsTable, LayoutContainer, SearchFormAndButtonContainer } from "./styles";

import { Trash } from "phosphor-react";
import { SearchForm } from "./components/SearchForm";

export function Group() {
  const navigate = useNavigate();

  function handleTableGroupClick() {
    navigate("/document/details");
  }

  function handleTrashClick(event: React.MouseEvent) {
    event?.stopPropagation();
    alert("Vamos criar o modal agora");
  }

  return(
    <LayoutContainer>
      <SearchFormAndButtonContainer>
        <SearchForm />

        <ButtonContainer>Upload document</ButtonContainer>
      </SearchFormAndButtonContainer>

        <GroupsTable>
          <tbody onClick={handleTableGroupClick}>
            <tr>
              <td>Document 1.pdf</td>
              <td className="textPreview">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam corporis atque quae, veritatis error doloribus molestiae suscipit fuga rerum ipsa impedit blanditiis laborum voluptatum dolorum quaerat quasi esse libero itaque.</td>
              <td>
                <Tag text="Category"/>
              </td>
              <td>
                <Trash size={24} onClick={handleTrashClick}/>
              </td>
            </tr>

            <tr>
              <td>Document 2.pdf</td>
              <td className="textPreview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, deleniti numquam nihil ipsam aut impedit temporibus provident obcaecati dicta autem totam fugit voluptatibus dolores, expedita ullam vitae odio necessitatibus? Maxime.</td>
              <td>
                <Tag text="Category"/>
              </td>
              <td>
                <Trash size={24} onClick={handleTrashClick}/>
              </td>
            </tr>

            <tr>
              <td>Document 3.pdf</td>
              <td className="textPreview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut nobis sit maiores id numquam facilis consequatur iure at nisi praesentium, enim ipsa quidem, quos similique in dolores distinctio reprehenderit.</td>
              <td>
                <Tag text="Category"/>
              </td>
              <td>
                <Trash size={24} onClick={handleTrashClick}/>
              </td>
            </tr>

            <tr>
              <td>Document 4.pdf</td>
              <td className="textPreview">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis voluptate, nesciunt soluta, quas dolorum minima voluptatem laboriosam eius labore inventore ab magnam beatae quam nam illo magni repellendus maiores rerum.</td>
              <td>
                <Tag text="Category"/>
              </td>
              <td>
                <Trash size={24} onClick={handleTrashClick}/>
              </td>           
            </tr>
          </tbody>
        </GroupsTable>
    </LayoutContainer>
  )
}