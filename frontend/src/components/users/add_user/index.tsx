'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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

const formSchema = z.object({
  FirstName: z.string().min(2, {
    message: 'FirstName must be at least 2 characters.',
  }),
  LastName: z.string().min(2, {
    message: 'LastName must be at least 2 characters.',
  }),
  Email: z.string().email({
    message: 'Email is required.',
  }),
  Phone: z.string().regex(/^(010|011|012|015)\d{8}$/, {
    message:
      'Invalid phone number. Please enter a valid Egyptian mobile number starting with 010, 011, 012, or 015, followed by 8 digits.',
  }),
});
const AddUserForm = () => {
  const t = useTranslations('task_1');
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // Invalidate and refetch
      console.log('worked');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await mutation.mutateAsync(values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex-1 flex-basis-350 lg:max-w-[50%]'
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
