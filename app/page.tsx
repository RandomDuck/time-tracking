import Link from 'next/link';
import Skeleton from './components/Skeleton';

export default function Home() {
  return (
    <Skeleton>
      <Link className='btn-primary' href="/pages/public/functions/login">
        Login
      </Link>
    </Skeleton>
  );
}
