import { PageContainer } from "components/Common/Containers";
import CreateDaoForm from "components/CreateDAO.Form";

const CreateDAO = () => (
  <PageContainer padded>
    <h1 className="h2">Create DAO</h1>
    <p>Create a Micro-blogging DAO</p>

    <CreateDaoForm onSubmit={(d) => console.log({ d })} />
  </PageContainer>
);

export default CreateDAO;
