'use client';
import getUsers from '@/api/queries/getUsers';
import { UserResponse } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

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
import { useMemo, useState } from 'react';
const UsersTable = () => {
  const t = useTranslations('task_1');
  const locale = useLocale();
  const [page, setPage] = useState(1);
  console.log(page);
  let usersPerPage = 4;
  const { isLoading, data } = useQuery<UserResponse[]>({
    queryKey: ['todos'],
    queryFn: getUsers,
  });
  const numberOfPages = useMemo(
    function () {
      if (!data) {
        return 0;
      }
      return Math.ceil(data.length / usersPerPage);
    },
    [data, usersPerPage]
  );
  console.log(data?.slice(page - 1 * usersPerPage, page * usersPerPage));

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
            data
              .slice((page - 1) * usersPerPage, page * usersPerPage)
              .map((user) => (
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
      <Pagination className='max-w-sm'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href='#'
              onClick={() => {
                setPage((current) => {
                  if (current > 1) {
                    console.log('in');
                    return (current -= 1);
                  }
                  return current;
                });
              }}
            />
          </PaginationItem>
          {Array.from(Array(numberOfPages).keys()).map((page) => {
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href='#'
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              href='#'
              onClick={() => {
                setPage((current) => {
                  if (current < numberOfPages) {
                    return (current += 1);
                  }
                  return current;
                });
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
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
