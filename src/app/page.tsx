import { currentUser } from "@clerk/nextjs";
import ListUsers from "./ListUsers";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default async function Home() {
  return (
    <div>
      <ListUsers />
    </div>
  );
}
