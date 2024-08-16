import Navbar from '@/components/navbar';
import UsersSection from '@/components/users';
import DigiFlyGeoLocation from '@/components/geolocation';
import TextEditor from '@/components/textEditor';

export default function Home() {
  return (
    <main className=' min-h-screen space-y-10'>
      <Navbar />
      <UsersSection />
      <DigiFlyGeoLocation />
      <TextEditor />
    </main>
  );
}
