import Link from "next/link";

const UserCard = ({ user }) => {
  const { _id, name, email } = user;
  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title"> {name} </h2>
        <p> {email} </p>
        <Link className="btn btn-secondary" href={`/users/${_id}`}>
          {" "}
          Details{" "}
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
