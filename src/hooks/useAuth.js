"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useEffect } from "react";
import axios from "axios";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

export default function useAuth() {
  const { data: session, isPending: loading } = useSession();
  const user = session?.user || null;

  useEffect(() => {
    if (user) {
     
      axios.post(
        `${SERVER_URL}/api/auth/jwt`,
        { email: user.email, name: user.name },
        { withCredentials: true }
      ).catch(console.error);
    }
  }, [user]);

  const logOut = async () => {
    await signOut();
    await axios.post(
      `${SERVER_URL}/api/auth/logout`,
      {},
      { withCredentials: true }
    );
  };

  return { user, loading, logOut };
}