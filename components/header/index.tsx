import { FC } from 'react';
import Image from 'next/image'

const Header: FC<{}> = () => {
  return (
    <Image
      src="https://cdn.mingyangli.com/image/logo.png"
      alt="Blog Title"
      width={150}
      height={150}
    />
  )
}

export default Header;