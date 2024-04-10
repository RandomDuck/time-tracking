import MainPage from '@/app/components/MainPage';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link className='btn-primary' href="/login">
        Login
      </Link>
      <MainPage />
    </>
  );
}
