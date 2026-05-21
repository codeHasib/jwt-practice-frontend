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
