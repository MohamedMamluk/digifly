import { User, UserResponse } from '@/types/user';
import axios from 'axios';
const getUsers = async () => {
  const response = await axios.get<UserResponse[]>(
    'http://localhost:1337/user-informations'
  );
  return response.data;
};
export default getUsers;
