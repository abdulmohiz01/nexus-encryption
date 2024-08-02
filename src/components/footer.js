import Link from "next/link"
import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { FaSquareUpwork, FaSquareGithub } from "react-icons/fa6"
const NavigationLinks = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Ciphers',
    href: '/ciphers'
  },
  {
    name: 'Contact',
    href: '/contact'
  },
  {
    name: 'About Us',
    href: '/aboutUs'
  }
];
const CipherLinks = [
  {
    name: 'Caesar Cipher',
    href: '/ciphers/caesar-cipher'
  },
  {
    name: 'Vigenere Cipher',
    href: '/ciphers/vigenere-cipher'
  },
  {
    name: 'Rail Fence Cipher',
    href: '/ciphers/rail-fence-cipher'
  },
  {
    name: 'DES',
    href: '/ciphers/data-encryption-standard'
  },
  {
    name: 'AES',
    href: '/ciphers/advanced-encryption-standard'
  }
];
const date = new Date();
let d = date.getFullYear();


const Footer = () => {
  return (
    <>
      <hr />
      <footer className="relative  pt-8 pb-6">
        <div className="container lg:mx-auto px-4 sm:ml-2">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className="text-3xl  text-blueGray-700">Let's keep in touch!</h1>
              <h2 className="text-lg mt-0 mb-2 text-gray-400">
                Nexus Encryption is an Open source project. Feel free to suggest any changes.
              </h2>
              <div className="mt-6 lg:mb-0 mb-6 flex p-2 gap-3">
                <Link href={'https://github.com/abdulmohiz01/nexus-encryption'} aria-label="Github" > <FaSquareGithub href={'https://github.com/abdulmohiz01/nexus-encryption'} size={20} className=" text-gray-50 hover:text-gray-400 transition-all duration-300 ease-in-out " /></Link>
                <Link href={'https://www.upwork.com/freelancers/~01939710390bbdfe41'} aria-label="Upwork" > <FaSquareUpwork size={20} className="text-gray-50 hover:text-gray-400 transition-all duration-300 ease-in-out " /></Link>
                <Link href={'https://www.linkedin.com/in/abdul-mohiz/'} aria-label="LinkedIn" > <FaLinkedin size={20} className=" text-gray-50 hover:text-gray-400 transition-all duration-300 ease-in-out " /></Link>
                <Link href={'https://www.instagram.com/_abdulmohiz_'} aria-label="Instagram" > <FaInstagram size={20} className=" text-gray-50 hover:text-gray-400 transition-all duration-300 ease-in-out " /></Link>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-400 text-sm font-semibold mb-2">Navigation</span>
                  <ul className="list-unstyled">
                    {
                      NavigationLinks.map((link, index) => (
                        <li key={index}>
                          <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href={link.href}>{link.name}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-400 text-sm font-semibold mb-2">Ciphers</span>
                  <ul className="list-unstyled">
                    {
                      CipherLinks.map((link, index) => (
                        <li key={index}>
                          <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href={link.href}>{link.name}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
        <hr className="my-6 border-gray-200 w-[80%] m-auto " />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-300 font-semibold py-1">
              Copyright © <span id="get-current-year">{d}</span><br className="sm:block md:hidden" />
              <Link href={'/'} aria-label="Nexus Encryption Homepage" className="text-blueGray-500 hover:text-blueGray-800"> Nexus Encryption</Link>.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer