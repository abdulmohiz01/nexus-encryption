import Image from "next/image"
import Link from "next/link"
const Header = () => {
  return (
    <div >
      <div className="flex justify-center p-5">
        <Link href={'/'}><Image src={'/nexus-1.png'} alt={'Nexus Encryption Logo'} priority width={550} height={50}/></Link>
      </div>
      <div className="flex items-center justify-between px-12 py-3 border-b">
        <Link href='/'>Home</Link>
        <Link href='/blog'>Blogs</Link>
        <Link href='/ciphers'>Tools</Link>
        <Link href='/aboutUs'>About Us</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Header