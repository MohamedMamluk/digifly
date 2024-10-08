import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { cn } from '@/lib/utils';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import StoreProvider from '@/lib/store/StateProvider';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale == 'ar' ? 'rtl' : 'ltr'}>
      <body className={cn(poppins.className, '')}>
        <NextIntlClientProvider messages={messages}>
          <div id='layout_container' className='px-5 max-w-screen-xl mx-auto'>
            <Navbar />
            <ReactQueryProvider>
              <StoreProvider>{children}</StoreProvider>
            </ReactQueryProvider>
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
