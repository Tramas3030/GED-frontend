import { useNavigate } from "react-router-dom";
import { Trash } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import { 
  GroupsTable, 
  LayoutContainer, 
  SearchFormAndButtonContainer, 
  UploadDocumentButtonContainer 
} from "./styles";

import { SearchForm } from "./components/SearchForm";
import { Tag } from "./components/Tag";
import { UploadDocumentModal } from "./components/UploadDocumentModal";

export function Group() {
  const navigate = useNavigate();

  function handleTableGroupClick() {
    navigate("/document/details");
  }

  function handleTrashClick(event: React.MouseEvent) {
    event?.stopPropagation();
  }

  return(
    <LayoutContainer>
      <SearchFormAndButtonContainer>
        <SearchForm />

        <UploadDocumentButtonContainer>Upload document</UploadDocumentButtonContainer>
      </SearchFormAndButtonContainer>

        <GroupsTable>
          <tbody onClick={handleTableGroupClick}>
            <tr>
              <td>Document 1.pdf</td>
              <td className="textPreview">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam corporis atque quae, veritatis error doloribus molestiae suscipit fuga rerum ipsa impedit blanditiis laborum voluptatum dolorum quaerat quasi esse libero itaque.</td>
              <td>
                <Tag text="Category"/>
              </td>
              <td onClick={handleTrashClick}>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Trash size={24}/>
                  </Dialog.Trigger>

                  <UploadDocumentModal />
                </Dialog.Root>
              </td>
            </tr>

            <tr>
              <td>Document 2.pdf</td>
              <td className="textPreview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, deleniti numquam nihil ipsam aut impedit temporibus provident obcaecati dicta autem totam fugit voluptatibus dolores, expedita ullam vitae odio necessitatibus? Maxime.</td>
              <td>
                <Tag text="Category"/>
              </td>
              <td onClick={handleTrashClick}>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <Trash size={24}/>
                    </Dialog.Trigger>

                    <UploadDocumentModal />
                  </Dialog.Root>
              </td>
            </tr>

            <tr>
              <td>Document 3.pdf</td>
              <td className="textPreview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut nobis sit maiores id numquam facilis consequatur iure at nisi praesentium, enim ipsa quidem, quos similique in dolores distinctio reprehenderit.</td>
              <td>
                <Tag text="Category"/>
              </td>
              <td onClick={handleTrashClick}>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <Trash size={24}/>
                    </Dialog.Trigger>

                    <UploadDocumentModal />
                  </Dialog.Root>
              </td>
            </tr>

            <tr>
              <td>Document 4.pdf</td>
              <td className="textPreview">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis voluptate, nesciunt soluta, quas dolorum minima voluptatem laboriosam eius labore inventore ab magnam beatae quam nam illo magni repellendus maiores rerum.</td>
              <td>
                <Tag text="Category"/>
              </td>
              <td onClick={handleTrashClick}>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Trash size={24}/>
                  </Dialog.Trigger>

                  <UploadDocumentModal />
                </Dialog.Root>
              </td>           
            </tr>
          </tbody>
        </GroupsTable>
    </LayoutContainer>
  )
}