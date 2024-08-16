import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/navbar';
import UsersSection from '@/components/users';

export default function Home() {
  return (
    <main className=' min-h-screen'>
      <Navbar />
      <UsersSection />
    </main>
  );
}
