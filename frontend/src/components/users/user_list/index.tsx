'use client';
import getUsers from '@/api/queries/getUsers';
import { UserResponse } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
const UsersTable = () => {
  const t = useTranslations('task_1');
  const locale = useLocale();
  const { isLoading, data } = useQuery<UserResponse[]>({
    queryKey: ['todos'],
    queryFn: getUsers,
  });

  return (
    <div className={cn('flex-1 flex-basis-350')}>
      <h1 className='text-digiPurple font-bold'>{t('results')}:</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t('first_name')}</TableHead>
            <TableHead>{t('last_name')}</TableHead>
            <TableHead>{t('mobile_number')}</TableHead>
            <TableHead>{t('email')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && <BodySkeleton />}

          {data?.length &&
            data.map((user) => (
              <TableRow
                key={user.id}
                className={cn(locale !== 'en' && 'text-end', 'font-bold')}
              >
                <TableCell>{user.FirstName}</TableCell>
                <TableCell>{user.LastName}</TableCell>
                <TableCell>{user.Phone}</TableCell>
                <TableCell>{user.Email}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;

const BodySkeleton = () => {
  return (
    <TableRow>
      <TableCell className=''>
        <span className=' animate-pulse block bg-muted w-[100px] h-[20px] rounded-full'></span>
      </TableCell>
      <TableCell className=''>
        <span className=' animate-pulse block bg-muted w-[100px] h-[20px] rounded-full'></span>
      </TableCell>
      <TableCell className=''>
        <span className=' animate-pulse block bg-muted w-[100px] h-[20px] rounded-full'></span>
      </TableCell>
      <TableCell className=''>
        <span className=' animate-pulse block bg-muted w-[100px] h-[20px] rounded-full'></span>
      </TableCell>
    </TableRow>
  );
};
