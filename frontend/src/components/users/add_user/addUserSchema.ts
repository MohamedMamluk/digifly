import { z } from 'zod';

export const formSchema = z.object({
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

export type SchemaType = z.infer<typeof formSchema>;
