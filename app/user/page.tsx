'use client';

import { User } from "@/pages/api/user";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user') || ''));
  }, []);

  return (
    <>
      <section>
        <h1>Welcome {user?.name}</h1>
      </section>
    </>
  );
}
