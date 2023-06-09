"use client";

import { trpc } from "@/utils/trpc";
import Image from "next/image";
import React from "react";

export default function ListUsers() {
  let { data: users, isLoading, isFetching } = trpc.posts.getAll.useQuery();

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid">
      <p className="text-red-400">hallo</p>
      {users?.map((user: any) => (
        <div
          className="border border-slate-600"
          key={user.id}
        >
          <h1>{user.email}</h1>
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
}
