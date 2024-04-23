import Link from 'next/link';
import Skeleton from './components/Skeleton';
import { FUNCTION_ROUTES } from './constants/routes';

export default function Home() {
  return (
    <Skeleton>
      <Link className='btn-primary' href={FUNCTION_ROUTES[2].url}>
        Login
      </Link>
    </Skeleton>
  );
}
