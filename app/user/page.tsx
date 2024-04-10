'use client';

export default function Home() {
  const id = sessionStorage.getItem('user');
  const fetchUser = async () => {
    const res = await fetch('api/user?id=' + id);
    const data = await res;
    console.log(res.body)
    return data;
  }
  console.log(id, fetchUser());
  return (
    <>
      sucess logged in
    </>
  );
}
