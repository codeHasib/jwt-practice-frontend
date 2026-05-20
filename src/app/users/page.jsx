import UserCard from "@/components/UserCard";
import { getAllData } from "@/lib/getData";

const UserPage = async () => {
  const data = await getAllData();
  return (
    <div>
      {data.map((user) => (
        <UserCard key={user._id} user={user}></UserCard>
      ))}
    </div>
  );
};

export default UserPage;
