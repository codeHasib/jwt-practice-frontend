import UserDetailsCard from "@/components/UserDetailsCard";
import { auth } from "@/lib/auth";
import { getDataById } from "@/lib/getData";
import { headers } from "next/headers";

const UserDetailsPage = async ({ params }) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const { id } = await params;
  const userDetails = await getDataById(id, token);
  console.log(userDetails);

  return (
    <div>
      <UserDetailsCard user={userDetails}></UserDetailsCard>
    </div>
  );
};

export default UserDetailsPage;
