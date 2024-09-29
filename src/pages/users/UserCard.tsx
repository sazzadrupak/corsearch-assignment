import cn from 'classnames';
import { SiGooglemaps } from 'react-icons/si';

import { User } from '../../entities';

import s from './UserCard.module.scss';

interface Props {
  users: User[];
}

/**
 * Helper function to get the user's address
 * @param {User['address']} address - user's address
 * @returns {string} The formatted address
 */
const getUserAddress = (address: User['address']): string => {
  return `${address.street}, ${address.suite}, ${address.city}`;
};

/**
 * Component for displaying a list of users in a card view
 * @component
 * @param {object} Props - component accepts users as a prop
 * @param {User[]} Props.users - array of users
 * @returns {JSX.Element} The rendered UserCard component
 */
const UserCard = ({ users }: Props): JSX.Element => {
  return (
    <div className={s.cardContainer}>
      {users.map((user) => (
        <div key={user.id} className={s.userCard}>
          <div className={s.userImage}>
            <img src="https://via.placeholder.com/150" />
          </div>
          <div className={s.userProfile}>
            <h6 className={s.primaryText}>{user.name}</h6>
            <h6 className={s.secondaryText}>{user.email}</h6>
            <h6 className={s.secondaryText}>{user.phone}</h6>
          </div>
          <a
            href={`http://${user.website}`}
            target="_blank"
            className={cn(s.websiteButton, s.secondaryText)}
          >
            View website
          </a>
          <div className={cn(s.userAddress)}>
            <SiGooglemaps className={s.addressIcon} />
            {getUserAddress(user.address)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
