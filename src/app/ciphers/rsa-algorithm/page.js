import RSAPage from "./../(rsa)/rsa"
import BreadCrumb from "./../../../components/breadcrumb";

export const metadata = {
    title: "RSA Algorithm Encryption & Decryption Tool",
    description: "Explore the RSA Algorithm tool for secure encryption and decryption. RSA is a widely used asymmetric cryptographic algorithm that ensures data security using a pair of public and private keys.",
    author: "Nexus Encryption",
    robots: "index, follow",
    openGraph: {
      title: "RSA Algorithm Encryption & Decryption Tool",
      description: "Explore the RSA Algorithm tool for secure encryption and decryption. RSA is a widely used asymmetric cryptographic algorithm that ensures data security using a pair of public and private keys.",
      type: "website",
      url: "https://nexusencryption.com/ciphers/rsa-algorithm",
      site_name: "Nexus Encryption",
    },
    canonical: "https://nexusencryption.com/ciphers/rsa-algorithm",
    language: "en-US",
    category: 'ciphers',
  };

  
const RSA = () => {
    return (
        <div>
            <BreadCrumb homeElement="Home" separator={<svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg>} capitalizeLinks={true} />
            <RSAPage />
        </div>
    )
}

export default RSA