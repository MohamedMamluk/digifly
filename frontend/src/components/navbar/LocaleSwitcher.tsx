'use client';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
const flagImages = {
  ar: '/ar_flag.png',
  en: '/en_flag.png',
};
const LocaleSwitcher = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const t = useTranslations('navbar');
  return (
    <button
      className='flex items-center'
      onClick={() =>
        router.replace(pathname, { locale: locale == 'en' ? 'ar' : 'en' })
      }
    >
      {t('language')}
      <img src={flagImages[locale]} alt='' className='w-8' />
    </button>
  );
};

export default LocaleSwitcher;
