'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Nav = {
  id: number;
  title: string;
  path: string;
};

const nav: Nav[] = [
  { id: 1, title: "Дом", path: '/' },
  { id: 2, title: "Контакт", path: '/contact' },
  { id: 3, title: "Проекты", path: '/projectsPage' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='fixed bg-gray-900 top-0 text-left right-0 left-0 text-white p-3'>
      <div>
        {nav.map(({ id, title, path }) => (
          <Link key={id} href={path} className='m-3'>
            <span className={pathname === path ? 'text-blue-500 border-b-2 border-blue-500 pb-1 font-medium' : undefined}>
              {title}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
