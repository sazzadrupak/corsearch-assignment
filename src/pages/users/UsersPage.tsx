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

  const [sortType, setSortType] = useState<boolean>(false);
  const handleSortTypeChange = (value: boolean) => {
    setSortType(value);
  };

  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  useEffect(() => {
    if (users && selectedFilterItem) {
      const filteredAndSorted = users.reduce<User[]>(() => {
        const filtered = throttledInput
          ? users.filter((user) =>
              user[selectedFilterItem]
                .toLowerCase()
                .includes(throttledInput.toLowerCase())
            )
          : users;

        const sorted = filtered.sort((a, b) =>
          sortType
            ? a[selectedFilterItem].localeCompare(b[selectedFilterItem])
            : b[selectedFilterItem].localeCompare(a[selectedFilterItem])
        );
        return sorted;
      }, []);
      setFilteredUsers(filteredAndSorted);
    } else if (users) {
      setFilteredUsers(users);
    }
  }, [throttledInput, selectedFilterItem, sortType, users]);

  if (isLoading) {
    return <UsersSkeleton />;
  }

  if (error) {
    console.log(error);
    return <ErrorMessage error="No Data found" />;
  }

  return (
    <div className={s.container}>
      <UsersActions
        filterText={filterText}
        selectedFilterItem={selectedFilterItem}
        options={usersFilterOptions}
        sortType={sortType}
        onFilterTextChange={handleFilterTextChange}
        onUserFilter={handleUserFilter}
        onSortTypeChange={handleSortTypeChange}
      />
      <UserCard users={filteredUsers} />
    </div>
  );
};

export default UsersPage;
