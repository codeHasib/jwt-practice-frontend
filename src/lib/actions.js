import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addNewUser = async (formData, token) => {
  const newUser = Object.fromEntries(formData.entries());
  const res = await fetch("http://localhost:5000/add-users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(newUser),
  });
  if (!res.ok) {
  }
  const data = await res.json();
  if (data.insertedId) {
    redirect("/users");
  }
};

export const deleteUser = async (id, token) => {
  const res = await fetch(`http://localhost:5000/users/${id}`, {
    method: "DELETE",
    headers: {
      authorization: token,
    },
  });
  if (!res.ok) {
    console.log("nothhh");
  }
  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath("/users");
    redirect("/users");
  }
};

export const updateUser = async (id, formData, token) => {
  "use server";
  const updatedUser = Object.fromEntries(formData.entries());
  const cleanUser = Object.fromEntries(
    Object.entries(updatedUser).filter(([key]) => !key.startsWith("$")),
  );

  const res = await fetch(`http://localhost:5000/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(cleanUser),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Update failed");
  }

  if (data.modifiedCount > 0) {
    revalidatePath("/users");
  }

  redirect("/users");
};
