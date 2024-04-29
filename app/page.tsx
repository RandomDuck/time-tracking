
import { FUNCTION_ROUTES } from '@/assets/constants/routes';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Link className='btn-primary' href={FUNCTION_ROUTES[2].url}>
        Login
      </Link>
    </>
  );
}
