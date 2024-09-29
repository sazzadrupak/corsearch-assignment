import cn from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';

import s from './SelectField.module.scss';

interface Option<T> {
  label: string;
  value: T;
}

interface OptionProps<T> {
  option: Option<T>;
  selected: boolean;
  onClick: (option: Option<T>) => void;
}

/**
 * Component for displaying dropdown option
 * @component
 * @param {object} props - Component props
 * @param {string} props.option - item in the options list
 * @param {boolean} props.selected - Whether the option is selected or not
 * @param {function} props.onClick - Function to handle option click
 * @returns {JSX.Element} The rendered UsersActions component
 */
function Option<T extends string>({
  option,
  selected,
  onClick,
}: OptionProps<T>): JSX.Element {
  const optionRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (selected) {
        node?.scrollIntoView({ block: 'nearest' });
      }
    },
    [selected]
  );

  function handleClick() {
    onClick(option);
  }

  return (
    <div
      ref={optionRef}
      className={cn(s.option, { [s.selected]: selected })}
      onClick={handleClick}
    >
      {option.label}
    </div>
  );
}

interface Props<T> {
  className?: string;
  value: string | null;
  emptySelectionLabel?: string;
  options: Option<T>[];
  onSelection: (option: Option<T>) => void;
}

/**
 * Component for displaying dropdown list
 * @component
 * @param {object} props - Component props
 * @param {string} props.className - Additional CSS class names
 * @param {string} props.value - Currently selected option value
 * @param {string} props.emptySelectionLabel - Label for empty selection option
 * @param {array} props.options - List of options to display in the dropdown
 * @returns {JSX.Element} The rendered dropdown field
 */
function SelectField<T extends string>({
  className,
  value,
  emptySelectionLabel = 'Select item',
  options,
  onSelection,
}: Props<T>): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  function handleInputClick() {
    setExpanded(!expanded);
  }

  function handleOptionClick(option: Option<T>) {
    if (value !== option.value) {
      onSelection(option);
    }
    setExpanded(false);
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
        {selectedOption ? selectedOption.label : emptySelectionLabel}
      </div>
      {expanded && (
        <div className={cn(s.options)}>
          {options.map((option, index) => (
            <Option
              key={index}
              option={option}
              selected={value === option.value}
              onClick={handleOptionClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectField;
