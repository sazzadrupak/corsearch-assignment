import cn from 'classnames';

import s from './TextField.module.scss';

interface Props {
  className?: string;
}

/**
 * @description
 * @param props
 * @returns
 */
const TextField = ({ className }: Props) => {
  return (
    <div className={cn(s.wrapper, className)}>
      <input
        type="text"
        className={s.textField}
        value=""
        placeholder="Search..."
        onChange={() => {}}
      />
    </div>
  );
};

export default TextField;
