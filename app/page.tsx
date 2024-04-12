import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link className='btn-primary' href="/login">
        Login
      </Link>
    </>
  );
}
