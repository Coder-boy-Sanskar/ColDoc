import Image from "next/image"
import Link from "next/link"
import { Children } from "react"

const Header = ({children}:HeaderProps) => {
  return (
    <nav className="header">
      <Link href='/' className="md:flex-1">
      <Image
      src="/assets/icons/logo.svg"
      alt="logo-name"
      height={32}
      width={120}
      className="hidden md:block"
      
      />
       <Image
      src="/assets/icons/logoi-icons.svg"
      alt="logo-name"
      height={32}
      width={32}
      className="mr-2 md:hidden"
      
      />

      
      </Link>
      {children}
    </nav>
  )
}

export default Header
