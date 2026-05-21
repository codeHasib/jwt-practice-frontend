import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

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
    toast.error("Something went wrong");
  }
  const data = await res.json();
  if (data.insertedId) {
    toast.success("User added");
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
    // toast.error("Something went wrong");
    console.log("nothhh");
  }
  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath("/users");
    redirect("/users");
  }
};
