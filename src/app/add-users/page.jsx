import AddUserForm from "@/components/AddUserForm";
import { addNewUser } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const AddUserPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  async function wrapAddUser(formData) {
    "use server";
    await addNewUser(formData, token);
  }
  return (
    <div>
      <AddUserForm wrapAddUser={wrapAddUser}></AddUserForm>
    </div>
  );
};

export default AddUserPage;
