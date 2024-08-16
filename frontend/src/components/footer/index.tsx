import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');
  return (
    <footer className='bg-digiPurple text-slate-200 text-center py-2'>
      {t('copyright')} &copy; {`${t('company')} ${new Date().getFullYear()}`}
    </footer>
  );
};

export default Footer;
