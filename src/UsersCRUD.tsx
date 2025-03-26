import {
  Create,
  Datagrid,
  Edit,
  EmailField,
  List,
  Show,
  SimpleForm,
  SimpleList,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";
import MyUrlField from "./MyUrlField";
interface Record {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
  company: {
    name: string;
  };
}
const UserList = () => {
  const isSmall: boolean = useMediaQuery<Theme>((theme: Theme) =>
    theme.breakpoints.down("sm"),
  );
  return (
    <List>
      {isSmall ? (
        <SimpleList<Record>
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <MyUrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};
const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </SimpleShowLayout>
  </Show>
);
const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Edit>
);
const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Create>
);
export { UserList, UserShow, UserEdit, UserCreate };
