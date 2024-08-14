import BreadCrumb from './../../components/breadcrumb';
import CipherPage from './(ciphers)/cipher'

export const metadata = {
  title: "Ciphers",
  description: "A versatile web app for modular conversion, encoding, and encryption. Perform all operations directly in your browser without server interaction, ensuring speed and privacy. This open-source project is licensed under the MIT License, offering transparency and freedom for community contributions.",
  author: "Nexus Encryption",
  robots: "index, follow",
  openGraph: {
    title: "Ciphers - Nexus Encryption",
    description: "A versatile web app for modular conversion, encoding, and encryption. Perform all operations directly in your browser without server interaction, ensuring speed and privacy. This open-source project is licensed under the MIT License, offering transparency and freedom for community contributions.",
    type: "website",
    url: "https://nexusencryption.com/ciphers",
    site_name: "Nexus Encryption",
  },
  canonical: "https://nexusencryption.com/ciphers",
  language: "en-US",
  category: "ciphers",
};




const Ciphers = () => {
  return (
    <div className="">
      <BreadCrumb />
      <CipherPage />
    </div>
  );
};

export default Ciphers;
