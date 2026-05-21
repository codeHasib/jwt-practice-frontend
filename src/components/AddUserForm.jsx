"use client";

const AddUserForm = ({ wrapAddUser }) => {
  return (
    <div>
      <form
        className="flex flex-col p-4 gap-4 justify-center items-center"
        action={wrapAddUser}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-3"
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          className="border p-3"
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          className="border p-3"
        />
        <input
          type="text"
          name="desc"
          placeholder="Description"
          className="border p-3"
        />
        <button className="btn btn-accent" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
