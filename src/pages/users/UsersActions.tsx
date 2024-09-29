import SelectField from '../../components/SelectField';
import TextField from '../../components/TextField';
import ToggleField from '../../components/ToggleField';

import s from './UsersActions.module.scss';

interface Props {
  filterText: string;
  onFilterTextChange: (text: string) => void;
}

/**
 * Component for displaying users filter and sort options
 * @component
 * @param {object} props - Component props
 * @param {string} props.filterText - The current filter text
 * @param {function} props.onFilterTextChange - Callback function for handling filter text changes
 * @returns {JSX.Element} The rendered UsersActions component
 */
const UsersActions = ({
  filterText,
  onFilterTextChange,
}: Props): JSX.Element => {
  return (
    <div className={s.container}>
      <div className={s.inputGroup}>
        <div className={s.textFieldContainer}>
          <TextField
            className={s.textField}
            value={filterText}
            onChange={onFilterTextChange}
          />
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
