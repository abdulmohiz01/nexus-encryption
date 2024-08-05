import AesPage from "../(aes)/aes"
import BreadCrumb from "../../../components/breadcrumb";

export const metadata = {
    title: "Advanced Encryption Standard In Cryptography",
    description: "Free online AES tool for encryption/decryption. Supports ECB, CBC, CTR, GCM with 128, 192, 256-bit keys, IVs, Base64/Hex Key formats.",
    author: "Nexus Encryption",
    robots: "index, follow",
    openGraph: {
        title: "Advanced AES Encryption/Decryption Tool",
        description: "Free online AES tool for encryption/decryption. Supports ECB, CBC, CTR, GCM with 128, 192, 256-bit keys, IVs, Base64/Hex Key formats.",
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
            <BreadCrumb />
            <AesPage />
        </div>
    );
};

export default Aes;
