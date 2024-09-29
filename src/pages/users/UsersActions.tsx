import { option, userFilterStrings, usersFilterOptions } from '../../entities';

import SelectField from '../../components/SelectField';
import TextField from '../../components/TextField';
import ToggleField from '../../components/ToggleField';

import s from './UsersActions.module.scss';

interface Props {
  filterText: string;
  selectedFilterItem: userFilterStrings | null;
  options: typeof usersFilterOptions;
  onFilterTextChange: (text: string) => void;
  onUserFilter: (option: option) => void;
}

/**
 * Component for displaying users filter and sort options
 * @component
 * @param {object} props - Component props
 * @param {string} props.filterText - The current filter text
 * @param {string} props.selectedFilterItem - The currently selected filter item
 * @param {array} props.options - Array of filter options
 * @param {function} props.onUserFilter - Callback function for handling user filter selection
 * @param {function} props.onFilterTextChange - Callback function for handling filter text changes
 * @returns {JSX.Element} The rendered UsersActions component
 */
const UsersActions = ({
  filterText,
  selectedFilterItem,
  options,
  onFilterTextChange,
  onUserFilter,
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
          <SelectField
            className={s.selectField}
            value={selectedFilterItem}
            options={options}
            onSelection={onUserFilter}
          />
        </div>
      </div>
      <div className={s.toggleFieldContainer}>
        <ToggleField />
      </div>
    </div>
  );
};

export default UsersActions;
