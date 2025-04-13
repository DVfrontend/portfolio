'use client';

// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../ui/Navbar.module.scss';

type Nav = {
  id: number;
  title: string;
  path: string;
};

const nav: Nav[] = [
  { id: 1, title: "Home", path: '/' },
  { id: 2, title: "Contact", path: '/contact' },
  { id: 3, title: "About", path: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='fixed bg-gray-900 top-0 text-right right-0 left-0 text-white p-3'>
      {/* <Image src={'/logo.jpg'} alt='logo' width={40} height={40}> */}
{/* logo*/}
      {/* </Image> */}
      <div>
        {nav.map(({ id, title, path }) => (
          <Link key={id} href={path} className='m-3'>
            <span className={pathname === path ? styles.active : undefined}>
              {title}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
