import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/navbar';

export default function Home() {
  const t = useTranslations('task_1');

  return (
    <main className=' min-h-screen'>
      <Navbar />
      {t('first_name')}
    </main>
  );
}
