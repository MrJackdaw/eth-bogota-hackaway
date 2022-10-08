import { useState } from "react";
import { PageContainer } from "components/Common/Containers";
import CreateDaoForm from "components/CreateDAO.Form";
import { createDAOContract, CreateDAOOpts } from "reach/sdk";
import useGlobalUser from "hooks/GlobalUser";
import { DAO_ADDR_KEY } from "utils/constants";
import { resetNotifications, updateNotification } from "state";
import { FormDesc } from "components/Forms/Form";

const CreateDAO = () => {
  const { account } = useGlobalUser();
  const [err, setErr] = useState<string>();
  const [dao, setDAO] = useState(localStorage.getItem(DAO_ADDR_KEY) || "");
  const onSubmit = async (d: CreateDAOOpts) => {
    const id = resetNotifications("Creating DAO ...");
    const daoAddress = await createDAOContract(account, d);
    if (!daoAddress) setErr("Could not create DAO");
    else {
      setDAO(daoAddress);
      updateNotification(id, `DAO contract created at ${daoAddress}`);
      localStorage.setItem(DAO_ADDR_KEY, daoAddress);
    }
  };

  return (
    <PageContainer padded>
      <h1 className="h2">Create DAO</h1>
      <p>Create a Micro-blogging DAO</p>
      {dao ? (
        <FormDesc>
          DAO created at address: <b>{dao}</b>
        </FormDesc>
      ) : (
        <CreateDaoForm onSubmit={onSubmit} errorMessage={err} />
      )}
    </PageContainer>
  );
};

export default CreateDAO;
