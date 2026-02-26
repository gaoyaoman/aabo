import React from 'react';

interface CheckboxGroupProps {
  title: React.ReactNode;
  children: React.ReactNode;
  contentHeight?: string;
}

export default function CheckboxGroup({ title, children, contentHeight = 'auto' }: CheckboxGroupProps) {
  return (
    <div className="mb-8">
      <div className="text-[16px] font-[600] tracking-[0px] leading-[21.82px] text-[rgba(135,144,155,1)] text-left align-top mb-3">
        {title}
      </div>
      <div 
        className="flex flex-col gap-3 overflow-y-auto pr-2" 
        style={{ maxHeight: contentHeight }}
      >
        {children}
      </div>
    </div>
  );
}
