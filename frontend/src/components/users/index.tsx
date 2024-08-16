import SectionHeader from '../SectionHeader';
import { useTranslations } from 'next-intl';
import AddUserForm from './add_user';
import UsersTable from './user_list';
const UsersSection = () => {
  const t = useTranslations('task_1');
  return (
    <section className='space-y-4'>
      <SectionHeader
        sectionTitle={t('title')}
        sectionDescription={t('description')}
      />
      <div className='lg:flex flex-wrap gap-10 items-start'>
        <AddUserForm /> <UsersTable />
      </div>
    </section>
  );
};

export default UsersSection;
