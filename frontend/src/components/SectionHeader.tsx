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
    <div>
      <h1 className='flex items-center gap-2 font-bold text-lg'>
        <span className='w-16 h-1 bg-[#6D5CBC] rounded-sm block'></span>
        {sectionTitle}
      </h1>
      <p className='text-slate-500'>{sectionDescription}</p>
    </div>
  );
};

export default SectionHeader;
