import Navbar from '@/components/navbar';
import UsersSection from '@/components/users';
import DigiFlyGeoLocation from '@/components/geolocation';
import TextEditor from '@/components/textEditor';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className=' min-h-screen space-y-10 py-16'>
      <UsersSection />
      <DigiFlyGeoLocation />
      <TextEditor />
    </main>
  );
}
