import { useState } from 'react';

import ErrorMessage from '../../components/ErrorMessage';
import { useUsers } from '../../hooks/users';
import UserCard from './UserCard';
import UsersActions from './UsersActions';
import UsersSkeleton from './UsersSkeleton';

import s from './UsersPage.module.scss';

/**
 * Component for displaying users actions options and a list of users
 * @component
 * @returns {JSX.Element} The rendered UsersPage component
 */
const UsersPage = (): JSX.Element => {
  const { data: users, isLoading, error } = useUsers();

  const [filterText, setFilterText] = useState('');
  const handleFilterTextChange = (text: string) => {
    setFilterText(text);
  };

  if (isLoading) {
    return <UsersSkeleton />;
  }

  if (error) {
    console.log(error);
    return <ErrorMessage error="Failed to fetch data" />;
  }

  return (
    <div className={s.container}>
      <UsersActions
        filterText={filterText}
        onFilterTextChange={handleFilterTextChange}
      />
      <UserCard users={users!} />
    </div>
  );
};

export default UsersPage;
