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
      <BreadCrumb />
      <RSAPage />
    </div>
  )
}

export default RSA