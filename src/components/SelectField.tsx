import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

import s from './SelectField.module.scss';

interface Props {
  className?: string;
}

/**
 *
 * @param Props
 * @returns
 */
function SelectField({ className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  function handleInputClick() {
    setExpanded(!expanded);
  }

  useEffect(() => {
    function handleOutsideClick(ev: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(ev.target as Node)
      ) {
        setExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick, {
      capture: true,
    });
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <div ref={containerRef} className={cn(s.wrapper, className)}>
      <div
        className={cn(s.select, expanded && s.expanded)}
        onClick={handleInputClick}
      >
        Filter by
      </div>
      {expanded && (
        <div className={cn(s.options)}>
          <div className={cn(s.option)} onClick={() => {}}>
            Option 1
          </div>
          <div className={cn(s.option)} onClick={() => {}}>
            Option 2
          </div>
          <div className={cn(s.option)} onClick={() => {}}>
            Option 3
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectField;
