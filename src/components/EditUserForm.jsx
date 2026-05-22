"use client";

import { redirect, useRouter } from "next/navigation";

const EditUserForm = ({ updateUserFunc, userData }) => {
  const { _id, name, email, role, img, desc } = userData;
  const router = useRouter();
  return (
    <div>
      <form action={updateUserFunc}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Update User</legend>

          <label className="label">Name</label>
          <input
            defaultValue={name}
            type="text"
            name="name"
            className="input"
            placeholder="Name"
          />

          <label className="label">Email</label>
          <input
            defaultValue={email}
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />

          <label className="label">Role</label>
          <input
            defaultValue={role}
            type="text"
            className="input"
            placeholder="Role"
            name="role"
          />

          <label className="label">Image URL</label>
          <input
            defaultValue={img}
            type="text"
            className="input"
            placeholder="Image URL"
            name="img"
          />

          <label className="label">Description</label>
          <input
            type="text"
            className="input"
            placeholder="Description"
            defaultValue={desc}
            name="desc"
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Update User
          </button>
        </fieldset>
      </form>

      <button onClick={() => router.back()} className="btn btn-neutral mt-4">
        Cancel
      </button>
    </div>
  );
};

export default EditUserForm;
