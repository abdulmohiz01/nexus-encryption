import AesPage from "../(aes)/aes"
import BreadCrumb from "../../../components/breadcrumb";

export const metadata = {
    title: "Advanced AES Encryption & Decryption Tool",
    description: "A free online tool for advanced AES encryption and decryption. Supports ECB, CBC, CTR, and GCM modes with 128, 192, and 256-bit keys, initialization vectors, and data formats in Base64 or Hex. Key formats include UTF-8, Binary, and Hex.",
    author: "Nexus Encryption",
    robots: "index, follow",
    openGraph: {
        title: "Advanced AES Encryption/Decryption Tool",
        description: "A free online tool for advanced AES encryption and decryption. Supports ECB, CBC, CTR, and GCM modes with 128, 192, and 256-bit keys, initialization vectors, and data formats in Base64 or Hex. Key formats include UTF-8, Binary, and Hex.",
        type: "website",
        url: "https://nexusencryption.com/",
        image: "https://nexusencryption.com/_next/image?url=%2Fnexus-1.png&w=640&q=75",
        site_name: "Nexus Encryption",
    },
    canonical: "https://nexusencryption.com/ciphers/advanced-encryption-standard",
    language: "en-US",
    category: "ciphers",
};


const Aes = () => {
    return (
        <div >
            <BreadCrumb homeElement="Home" separator={<svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg>} capitalizeLinks={true} />
            <AesPage />
        </div>
    );
};

export default Aes;