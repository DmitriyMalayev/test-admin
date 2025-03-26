import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserCreate, UserEdit, UserList, UserShow } from "./UsersCRUD";
import { PostCreate, PostEdit, PostList, PostShow } from "./PostsCRUD";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      edit={UserEdit}
      create={UserCreate}
      icon={UserIcon}
    />
    <Resource
      name="posts"
      list={PostList}
      show={PostShow}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
  </Admin>
);
