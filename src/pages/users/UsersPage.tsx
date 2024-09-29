import UsersActions from './UsersActions';
import s from './UsersPage.module.scss';

const UsersPage = () => {
  return (
    <div className={s.container}>
      <UsersActions />
    </div>
  );
};

export default UsersPage;
