import Link from 'next/link';

const Home = () => {
  return (
    <div className='bg-white py-96 rounded-xl px-40'>
      <p>I have content</p>
      <Link href="/no-nav">Go to no nav</Link>
      <br />
      <Link href="/float">Go to float nav</Link>
    </div>
  );
};

export default Home;
