import React from 'react';
type SectionHeaderProps = {
  sectionTitle: string;
  sectionDescription: string;
};
const SectionHeader = ({
  sectionTitle,
  sectionDescription,
}: SectionHeaderProps) => {
  return (
    <div className='mb-10 space-y-5'>
      <h1 className='flex items-center gap-2 font-bold text-3xl'>
        <span className='w-16 h-1 bg-[#6D5CBC] rounded-sm block'></span>
        {sectionTitle}
      </h1>
      <p className='text-slate-500 text-lg font-normal max-w-5xl'>
        {sectionDescription}
      </p>
    </div>
  );
};

export default SectionHeader;
