"use client";

import { useSession, signOut } from "@/lib/auth-client";

export default function useAuth() {
  const { data: session, isPending: loading } = useSession();

  const user = session?.user || null;

  const logOut = async () => {
    await signOut();
  };

  return { user, loading, logOut };
}