import Image from 'next/image'

import { UserMenu } from '../UserMenu'

import styles from './Header.module.css'

const Header = () => (
  <header className={styles.header}>
    <Image
      src="/images/twitter.svg"
      alt="Twitter"
      width={50}
      height={50}
      className={styles.logo}
    />
    <UserMenu />
  </header>
)

export default Header
