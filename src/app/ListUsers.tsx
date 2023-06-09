"use client";
import { User } from "@clerk/nextjs/dist/types/server";
import React from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

interface ListUsersProps {
  user: User | null;
}

const ListUsers = () => {
  const { user } = useUser();
  return (
    <div>
      {user?.firstName}
      {!user && <SignInButton />}
      {!!user && <SignOutButton />}
    </div>
  );
};

export default ListUsers;
