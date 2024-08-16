import { useTranslations } from 'next-intl';
import SectionHeader from '../SectionHeader';
import Editor from './Editor';

const TextEditor = () => {
  const t = useTranslations('task_3');
  return (
    <section>
      <SectionHeader
        sectionTitle={t('title')}
        sectionDescription={t('description')}
      />
      <Editor />
    </section>
  );
};

export default TextEditor;
