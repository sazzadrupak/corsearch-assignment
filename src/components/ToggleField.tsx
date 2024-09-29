import cn from 'classnames';
import { ChangeEvent, useState } from 'react';

import s from './ToggleField.module.scss';

interface Props {
  className?: string;
}
/**
 * Component for toggling between ASC and DESC order
 * @component
 * @param {object} Props - component accepts className as a prop
 * @param {string} Props.className - optional className for the component
 * @returns {JSX.Element} The rendered ToggleField component
 */
const ToggleField = ({ className }: Props) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { checked } = ev.target;
    setChecked(checked);
  };
  return (
    <div className={cn(s.toggleContainer, className)}>
      <input
        id="toggle-switch"
        type="checkbox"
        checked={checked}
        className={s.toggleInput}
        onChange={handleChange}
      />
      <label htmlFor="toggle-switch" className={s.toggleLabel}>
        <span className={s.toggleTextLeft}>ASC</span>
        <span className={s.toggleTextRight}>DESC</span>
      </label>
    </div>
  );
};

export default ToggleField;
