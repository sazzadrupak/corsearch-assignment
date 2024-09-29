import SelectField from '../../components/SelectField';
import TextField from '../../components/TextField';
import ToggleField from '../../components/ToggleField';

import s from './UsersActions.module.scss';

const UsersActions = () => {
  return (
    <div className={s.container}>
      <div className={s.inputGroup}>
        <div className={s.textFieldContainer}>
          <TextField className={s.textField} />
        </div>
        <div className={s.selectFieldContainer}>
          <SelectField className={s.selectField} />
        </div>
      </div>
      <div className={s.toggleFieldContainer}>
        <ToggleField />
      </div>
    </div>
  );
};

export default UsersActions;
