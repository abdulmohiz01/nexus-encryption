import RSAPage from "./../(rsa)/rsa"
import BreadCrumb from "./../../../components/breadcrumb";

export const metadata = {
  title: "RSA Encryption and Decryption Explained",
  description: "Explore RSA encryption and decryption. RSA is a secure asymmetric algorithm using public and private keys to ensure data security.",
  author: "Nexus Encryption",
  robots: "index, follow",
  openGraph: {
    title: "RSA Algorithm Encryption & Decryption Tool",
    description: "Explore RSA encryption and decryption. RSA is a secure asymmetric algorithm using public and private keys to ensure data security.",
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
      <BreadCrumb />
      <RSAPage />
    </div>
  )
}

export default RSA