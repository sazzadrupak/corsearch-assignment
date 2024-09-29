import axios from 'axios';
import { useQuery } from 'react-query';
import { User } from '../entities';

/**
 * Fetches users from the API
 */
export const useUsers = () =>
  useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: () =>
      axios
        .get<User[]>('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.data),
  });
