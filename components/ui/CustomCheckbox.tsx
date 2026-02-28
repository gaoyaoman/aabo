'use client';

import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface CustomCheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function CustomCheckbox({ label, checked: controlledChecked, onChange }: CustomCheckboxProps) {
  const isControlled = controlledChecked !== undefined;
  const [internalChecked, setInternalChecked] = useState(controlledChecked || false);

  useEffect(() => {
    if (isControlled) {
      setInternalChecked(controlledChecked);
    }
  }, [controlledChecked, isControlled]);

  const isChecked = isControlled ? controlledChecked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  return (
    <label className="flex items-center gap-3 cursor-pointer group select-none">
      <div 
        className={`flex-shrink-0 flex items-center justify-center w-[16px] h-[16px] rounded-[2px] transition-colors ${
          isChecked 
            ? 'bg-[rgba(227,163,72,1)] border-none' 
            : 'border-[1px] border-[rgba(181,180,184,1)] bg-white'
        }`}
      >
        {isChecked && <Check className="w-3 h-3 text-white" strokeWidth={4} />}
      </div>
      <input 
        type="checkbox" 
        className="hidden" 
        checked={isChecked}
        onChange={handleChange}
      />
      <span 
        className={`text-[16px] tracking-[0px] leading-[21.82px] text-left align-top transition-colors ${
          isChecked 
            ? 'font-[700] text-[rgba(227,163,72,1)]' 
            : 'font-[400] text-[rgba(29,33,41,1)]'
        }`}
      >
        {label}
      </span>
    </label>
  );
}
