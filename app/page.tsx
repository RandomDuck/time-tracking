import MainPage, { getStaticProps } from './components/MainPage';

export default function Home() {
  const props = getStaticProps()

  console.log(props);
  
  return (
    <>
    {/* <MainPage /> */}
    </>
  );
}
