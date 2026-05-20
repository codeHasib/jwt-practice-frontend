import Image from "next/image";

const UserDetailsCard = ({ user }) => {
  const { name, email, img, desc, role } = user;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <Image src={img} alt={name + "image"} fill />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {name} </h2>
          <p className="font-bold"> {email} </p>
          <h3 className="font-extrabold text-xl"> {role} </h3>
          <p> {desc} </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
