import cn from 'classnames';
import { ChangeEvent } from 'react';

import s from './ToggleField.module.scss';

interface Props {
  className?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}
/**
 * Component for toggling between ASC and DESC order
 * @component
 * @param {object} Props - component accepts className as a prop
 * @param {string} Props.className - optional className for the component
 * @param {boolean} Props.value - current value of the toggle
 * @param {function} Props.onChange - function to handle toggle change
 * @returns {JSX.Element} The rendered ToggleField component
 */
const ToggleField = ({ className, value, onChange }: Props): JSX.Element => {
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { checked } = ev.target;
    onChange(checked);
  };
  return (
    <div className={cn(s.toggleContainer, className)}>
      <input
        id="toggle-switch"
        type="checkbox"
        checked={value}
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
