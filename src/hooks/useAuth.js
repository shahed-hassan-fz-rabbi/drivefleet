"use client";

import { useSession, signOut } from "@/lib/auth-client";
import axios from "axios";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

export default function useAuth() {
  const { data: session, isPending: loading } = useSession();

  const user = session?.user || null;

  const logOut = async () => {
    await signOut();
    // Server এ cookie clear করো
    await axios.post(
      `${SERVER_URL}/api/auth/logout`,
      {},
      { withCredentials: true }
    );
  };

  return { user, loading, logOut };
}