import Link from 'next/link';

const FloatPage = () => {
  return (
    <div className='bg-white py-96 rounded-xl px-40'>
      <p>This page has float nav</p>
      <Link href="/">Go to home</Link>
    </div>
  );
};

export default FloatPage;
