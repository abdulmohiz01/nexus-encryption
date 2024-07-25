import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    <div className="border-t flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-full p-3 ">
        <div className="ml-12 flex flex-col gap-2 w-[200px] justify-center items-center">
          <h3>Links</h3>
          <div className="flex flex-col gap-3 ml-4">
            <Link href={'/'}> Link-1 </Link>
            <Link href={'/'}> Link-2 </Link>
            <Link href={'/'}> Link-3 </Link>
            <Link href={'/'}> Link-4 </Link>
            <Link href={'/'}> Link-5 </Link>
          </div>
        </div>
        <div>
          <Image src={'/nexus-1.png'} width={500} height={50}  alt={'Nexus Encryption Logo'} priority />
        </div>
        <div className="mr-12 flex flex-col gap-2 w-[200px] justify-center items-center">
          <h3>Social</h3>
          <div className="flex flex-col gap-3 justify-center ml-4">
            <Link href={'/'}> Link-1 </Link>
            <Link href={'/'}> Link-2 </Link>
            <Link href={'/'}> Link-3 </Link>
            <Link href={'/'}> Link-4 </Link>
            <Link href={'/'}> Link-5 </Link>
          </div>
        </div>
      </div>
      <div className="text-center p-6">
        This Website is under Developement. Please visit again after sometime. Thankyou for your patience!
      </div>
    </div>
  )
}

export default Footer