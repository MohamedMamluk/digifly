'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useMutation } from '@tanstack/react-query';
import addUser from '@/api/mutations/addUser';
import { queryClient } from '@/providers/ReactQueryProvider';
import { useAppDispatch } from '@/lib/store/hooks';
import { addSingleUser } from '@/lib/store/features/users/usersSlice';
import { formSchema, SchemaType } from './addUserSchema';

const AddUserForm = () => {
  const dispatch = useAppDispatch();
  const t = useTranslations('task_1');
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: async (response) => {
      await queryClient.invalidateQueries({ queryKey: ['users'] });
      dispatch(addSingleUser(response.data));
      form.reset();
    },
  });

  const form = useForm<SchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
    },
  });
  async function onSubmit(values: SchemaType) {
    await mutation.mutateAsync(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex-1 flex-basis-350 lg:max-w-[50%] space-y-4'
      >
        <div id='username' className='flex flex-wrap gap-2'>
          <FormField
            control={form.control}
            name='FirstName'
            render={({ field }) => (
              <FormItem className='flex-1 flex-basis-200'>
                <FormLabel>{t('first_name')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('first_name')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='LastName'
            render={({ field }) => (
              <FormItem className='flex-1 flex-basis-200'>
                <FormLabel>{t('last_name')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('last_name')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='Phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('mobile_number')}</FormLabel>
              <FormControl>
                <Input placeholder={t('mobile_number')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='Email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email')}</FormLabel>
              <FormControl>
                <Input placeholder={t('email')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          {t('submit')}
        </Button>
      </form>
    </Form>
  );
};

export default AddUserForm;
