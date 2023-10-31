import Link from 'next/link';

const NoNavPage = () => {
  return (
    <div className='bg-white py-96 rounded-xl px-40'>
      <p>This page no nav</p>
      <Link href="/">Go to home</Link>
    </div>
  );
};

export default NoNavPage;
