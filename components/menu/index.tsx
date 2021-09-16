import { FC } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import menuList from './config';
import styles from './index.module.scss';
import cls from 'classnames';
const Menu: FC<{}> = () => {

  const { pathname } = useRouter();

  return (
    <ul className={styles['menu-wrapper']}>
      {
        menuList.map(({ label, link }) => (
          <li key={link}
            className={cls({
              [styles.active]: pathname === link,
              [styles['menu-wrapper__item']]: true
          })}>
            <Link
              href={link}
              
            >
              {label}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Menu;