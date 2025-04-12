import Link from 'next/link';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss'

type Nav = {
  id: number,
  title: string,
  path: string
}

const nav: Nav[] = [
  { id: 1, title: "Дом", path: '/ru/home' },
  {id: 2, title: "Контакт", path: '/ru/contact'},
  {id: 3, title: "Про меня", path: '/ru/about'},
]

export default function Navbar() {
  const { pathname } = useRouter()

  return (
    <>
      <nav>
        {/* <Image>
logo
        </Image> */}
        <div>
          {nav.map(({ id, title, path }) => (
            <Link key={id} href={path}><a  className={pathname === path ? styles.active : undefined}>{title}</a></Link>
          ))}
        </div>
      </nav>
    </>
  )
}