import AddProperty from '@/components/AddProperty';
import Property from '@/components/Property';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <AddProperty />
      <Property />
    </main>
  );
}
