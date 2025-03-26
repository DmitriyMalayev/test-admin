import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";

const postFilters = [
  <TextInput key="search-input" source="q" label="Search" alwaysOn />,
  <ReferenceInput
    key="user-input"
    source="userId"
    label="User"
    reference="users"
  />,
];

const PostList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick={false}>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="userId" reference="users" />
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </SimpleShowLayout>
  </Show>
);
const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="body" multiline minRows={5} maxRows={10} />
    </SimpleForm>
  </Edit>
);
const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline minRows={5} maxRows={10} />
    </SimpleForm>
  </Create>
);
export { PostList, PostShow, PostEdit, PostCreate };
