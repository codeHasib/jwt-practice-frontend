"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
      callbackURL: "/auth/signin",
    });

    if (!data) {
      alert(error.message);
    } else {
      alert("User Signed Up");
      redirect("/auth/signin");
    }
  }

  return (
    <div className="min-h-[70vh] flex justify-center items-center">
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Signup</legend>

          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name="name" />

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />

          <label className="label">Image URL</label>
          <input
            type="text"
            className="input"
            placeholder="Image URL"
            name="image"
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
