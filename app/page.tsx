import { FUNCTION_ROUTES } from '@/assets/constants/routes';
import Link from 'next/link';

export default function Home() {
  return (
    <section className='shadow-md py-5 px-5 h-[200px] flex flex-col gap-3'>
      <h2 className='font-bold text-xl'>Welcome to the time tracker</h2>
      <p>Please login or register an account to start tracking.</p>
      <div className='flex justify-between mt-5'>
        <Link className='secondary' href={FUNCTION_ROUTES[3].url}>
          Register
        </Link>
        <Link className='primary' href={FUNCTION_ROUTES[2].url}>
          Login
        </Link>
      </div>
    </section>
  );
}
