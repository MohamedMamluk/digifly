'use client';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import Image from 'next/image';
const flagImages = {
  ar: '/ar_flag.png',
  en: '/en_flag.png',
};

const LocaleSwitcher = () => {
  const pathname = usePathname();
  const locale = useLocale() as 'en' | 'ar';
  const router = useRouter();

  const t = useTranslations('navbar');
  return (
    <button
      className='flex items-center  gap-2'
      onClick={() =>
        router.replace(pathname, { locale: locale == 'en' ? 'ar' : 'en' })
      }
    >
      {t('language')}
      <div className='relative w-8 aspect-square'>
        <Image
          fill
          src={flagImages[locale]}
          alt=''
          className='w-full h-full object-contain'
        />
      </div>
    </button>
  );
};

export default LocaleSwitcher;
