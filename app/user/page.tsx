'use client';

import { User } from "@/pages/api/user";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user') || ''));
  }, []);

  // const fetchUser = async () => {
  //   const res = await fetch('api/user?id=' + id);
  //   const data = await res;
  //   console.log(res.body)
  //   return data;
  // }
  // console.log(id, fetchUser());
  console.log(user)
  return (
    <>
      <section>
        <h1>Welcome {user?.name}</h1>
        <ul>
          {user && Object.keys(user).map((key, index) => {
            return <li key={index}>{user[key]}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
