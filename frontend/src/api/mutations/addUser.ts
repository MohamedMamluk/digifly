import { User } from '@/types/user';
import axios from 'axios';
const addUser = async (data: User) => {
  const response = await axios.post(
    'http://localhost:1337/user-informations',
    data
  );
  return response.data;
};
export default addUser;
