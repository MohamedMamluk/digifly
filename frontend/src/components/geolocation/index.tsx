import React from 'react';
import SectionHeader from '../SectionHeader';
import { useTranslations } from 'next-intl';
import Map from './Map';

const DigiFlyGeoLocation = () => {
  const t = useTranslations('task_2');
  return (
    <div>
      <SectionHeader
        sectionTitle={t('title')}
        sectionDescription={t('description')}
      />
      <Map />
    </div>
  );
};

export default DigiFlyGeoLocation;
