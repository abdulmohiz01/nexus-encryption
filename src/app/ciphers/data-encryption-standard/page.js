import BreadCrumb from "../../../components/breadcrumb";
import DesPage from "../(des)/des";

export const metadata = {
    title: "DES, DES2 & DES3 Encryption & Decryption Tool",
    description: "Explore the Data Encryption Standard (DES) tool for secure encryption and decryption. Supports single, double, and triple DES for enhanced security.",
    author: "Nexus Encryption",
    robots: "index, follow",
    openGraph: {
        title: "DES, DES2 & DES3 Encryption & Decryption Tool",
        description: "Explore the Data Encryption Standard (DES) tool for secure encryption and decryption. Supports single, double, and triple DES for enhanced security.",
        type: "website",
        url: "https://nexusencryption.com/",
        image: "https://nexusencryption.com/_next/image?url=%2Fnexus-1.png&w=640&q=75",
        site_name: "Nexus Encryption",
    },
    canonical: "https://nexusencryption.com/ciphers/data-encryption-standard",
    language: "en-US",
    category: 'ciphers',
};


const DES = () => {
    return (
        <div>
            <BreadCrumb homeElement="Home" separator={<svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg>} capitalizeLinks={true} />
            <DesPage />
        </div>
    )
}

export default DES