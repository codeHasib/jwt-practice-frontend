import UserDetailsCard from "@/components/UserDetailsCard";
import { deleteUser } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { getDataById } from "@/lib/getData";
import { headers } from "next/headers";

const UserDetailsPage = async ({ params }) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const { id } = await params;
  const userDetails = await getDataById(id, token);

  const deleteFunc = async () => {
    "use server";
    await deleteUser(id, token);
  };

  return (
    <div>
      <UserDetailsCard
        user={userDetails}
        deleteUser={deleteFunc}
      ></UserDetailsCard>
    </div>
  );
};

export default UserDetailsPage;
