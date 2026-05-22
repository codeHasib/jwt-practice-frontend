import EditUserForm from "@/components/EditUserForm";
import { updateUser } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { getDataById } from "@/lib/getData";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const UserUpdatePage = async ({ params }) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const { id } = await params;
  const updateUserFunc = async (formData) => {
    "use server";
    await updateUser(id, formData, token);
  };
  const userData = await getDataById(id, token);
  return (
    <div>
      <EditUserForm
        userData={userData}
        updateUserFunc={updateUserFunc}
      ></EditUserForm>
    </div>
  );
};

export default UserUpdatePage;
