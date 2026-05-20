"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";

const Nav = () => {
  const links = (
    <>
      <li>
        <Link href={"/"}>HOME</Link>
        <Link href={"/users"}>USERS</Link>
        <Link href={"/auth/signin"}>SIGN IN</Link>
        <Link href={"/auth/signup"}>SIGN UP</Link>
      </li>
    </>
  );

  async function getOut() {
    await signOut();
    redirect("/");
  }

  const { data, isPending } = useSession();

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {}{" "}
          {data ? (
            <a onClick={getOut} className="btn btn-error">
              Sign Out
            </a>
          ) : (
            <Link className="btn btn-accent" href={"/auth/signin"}>
              {" "}
              Sign In{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
