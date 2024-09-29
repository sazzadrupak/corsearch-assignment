import Skeleton from '../../components/Skeleton';

import s from './UsersSkeleton.module.scss';

const UsersSkeleton = () => {
  const users = [1, 2, 3, 4];
  return (
    <div className={s.cardContainer}>
      <div className={s.inputContainer}>
        <Skeleton className={s.skeleton} />
      </div>
      <div className={s.userCards}>
        {users.map((user) => (
          <div key={user} className={s.userCard}>
            <Skeleton className={s.skeleton} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersSkeleton;
