import { useEffect, useState } from 'react';

import {
  option,
  User,
  userFilterStrings,
  usersFilterOptions,
} from '../../entities';
import { useThrottledValue } from '../../hooks';
import { useUsers } from '../../hooks/users';

import ErrorMessage from '../../components/ErrorMessage';
import UserCard from './UserCard';
import UsersActions from './UsersActions';
import UsersSkeleton from './UsersSkeleton';

import s from './UsersPage.module.scss';

const FILTER_TEXT_THROTTLE_MS = 400;

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

  const throttledInput = useThrottledValue(filterText, FILTER_TEXT_THROTTLE_MS);

  const [selectedFilterItem, setSelectedFilterItem] =
    useState<userFilterStrings | null>(null);
  const handleUserFilter = (filter: option) => {
    setSelectedFilterItem(filter.value);
  };

  const [filteredUsers, setFilteredUsers] = useState<User[] | []>([]);
  useEffect(() => {
    if (users && selectedFilterItem) {
      const res = users.filter((user) =>
        throttledInput
          ? user[selectedFilterItem]
              .toLowerCase()
              .includes(throttledInput.toLowerCase())
          : user
      );
      setFilteredUsers(res);
    } else if (users) {
      setFilteredUsers(users);
    }
  }, [throttledInput, selectedFilterItem, users]);

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
        selectedFilterItem={selectedFilterItem}
        options={usersFilterOptions}
        onFilterTextChange={handleFilterTextChange}
        onUserFilter={handleUserFilter}
      />
      <UserCard users={filteredUsers} />
    </div>
  );
};

export default UsersPage;
