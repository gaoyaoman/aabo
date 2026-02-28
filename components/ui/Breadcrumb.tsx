import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="absolute top-[-28px] left-0 flex items-center" style={{
      fontSize: '14px',
      fontWeight: '400',
      letterSpacing: '0px',
      lineHeight: '19.1px',
      color: 'rgba(78, 65, 110, 1)',
      textAlign: 'left',
      verticalAlign: 'top'
    }}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center">
            {isLast || !item.href ? (
              <span>{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:underline cursor-pointer">
                {item.label}
              </Link>
            )}
            {!isLast && (
              <span style={{ margin: '0 2px' }}>/</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
