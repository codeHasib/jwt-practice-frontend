"use client";

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserDetailsCard = ({ user, deleteUser, updateUserFunc }) => {
  const { _id, name, ownerId, email, img, desc, role } = user;

  const { data, error } = useSession();
  const userId = data?.user?.id;

  return (
    <div>
      <div className="w-full h-50">
        <Image
          src={img}
          alt={name + " image"}
          width={250}
          height={250}
          className="object-cover"
        />
      </div>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title"> {name} </h2>
          <p className="font-bold"> {email} </p>
          <h3 className="font-extrabold text-xl"> {role} </h3>
          <p> {desc} </p>
          {userId === ownerId ? (
            <div>
              <button
                className="btn btn-error"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                DELETE USER
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg"> Warning! </h3>
                  <p className="py-4">
                    Are you sure you want to delete {name}?
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                      <button onClick={deleteUser} className="btn btn-error">
                        Yes Delete it
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
              <Link
                href={`/users/edit/${_id}`}
                className="btn btn-accent w-full"
              >
                UPDATE USER
              </Link>
            </div>
          ) : (
            <div className="text-2xl text-center font-bold text-red-400">
              <p>Not Authorized to update</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
