import TextField from '../../components/TextField';
import s from './UsersActions.module.scss';

const UsersActions = () => {
  return (
    <div className={s.container}>
      <div className={s.inputGroup}>
        <div className={s.textFieldContainer}>
          <TextField className={s.textField} />
        </div>
      </div>
    </div>
  );
};

export default UsersActions;
