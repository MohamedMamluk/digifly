export type User = {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
};

export type UserResponse = User & {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
};
